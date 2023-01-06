const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "please give me title!"],
            unique: true,
            maxlength: [40, "title-iin urt deed tal n 40 temdegt bh ystoi."],
        },
        userName: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        link: {
            type: String,
            required: [true, "please give me link!"],
        },
        isHide: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true });
const Link = mongoose.model("Link", linkSchema);
module.exports = { Link }