const request = require('request-promise');
const fs = require('fs')


const clone = async (req, res, next) => {
    try {
        const body = req.body;
        // console.log(body);
        const URL = body.url;
        // console.log(URL);
        const response = await request(URL);
        // console.log(response);
        const filePath = `./uploads/${body.filename}.html`;
        // console.log(filePath);
        // Use fs.promises.writeFile for async file writing
        await fs.writeFile(filePath, response, (err, res) => {
            if(err)
                console.log(err);
            else
                console.log(res);
        });
        res.status(200).json({
            success: true
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

// const download = async (req, res) => {
//     const filePath = `./uploads/${req.query.filename}.html`;
//     console.log(filePath);
//     await res.download(filePath);
//     console.log("File Downloaded");
// }

const download = async (req, res) => {
    const filePath = `./uploads/${req.query.filename}.html`;
    console.log(filePath);

    // Set the appropriate headers for file download
    res.setHeader('Content-Disposition', `attachment; filename=${req.query.filename}.html`);
    res.setHeader('Content-Type', 'text/html');

    // Send the file as the response
    await res.download(filePath, () => {
        // This callback is called when the file download is complete
        console.log("File Downloaded");

        // Use fs.promises.unlink to delete the file after download
        fs.promises.unlink(filePath)
            .then(() => console.log('File deleted'))
            .catch((unlinkErr) => console.error('Error deleting file:', unlinkErr.message));
    });
};


module.exports={
    clone, 
    download
}
