const request = require('request-promise');
const fs = require('fs')


const clone = async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const response = await request(body.url);
        const filePath = `../uploads/${body.filename}.html`;

        // Use fs.promises.writeFile for async file writing
        await fs.promises.writeFile(filePath, response);

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        // Use fs.promises.unlink to delete the file
        await fs.promises.unlink(filePath);
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};


module.exports=clone;
