const user = require("../models/UserModel")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
/////////////////////////////////////////
const Register = async (_name, _email, _password) => { // هذه الدالة مسؤولة عن إنشاء مستخدم جديد.
    try {
        const hash = await bcrypt.hash(_password, 5)

        let data = await user.create({
            name: _name,
            email: _email,
            password: _password
        }); //للتعامل مع العمليات غير المتزامنة مثل الوصول إلى قاعدة البيانات.
        // تحاول إنشاء مستخدم جديد باستخدام الدالة User.create() من Mongoose.
        if (data) {
            console.log("done")
        } else {
            console.log("error");
        }
    } catch (e) {
        console.log(e);

    }

}
const Login = (_name, _email, _password) => {
    try {
        let data = user.find({
            email: _email,
            name: _name,
            password: _password
        }); //هذه الدالة مسؤولة عن التحقق من بيانات تسجيل الدخول.
        // تستخدم الدالة User.find() من Mongoose للبحث عن مستخدم بناءً على عنوان البريد الإلكتروني والاسم المدخلين.
        if (data) {
            console.log("ok can enter my dashboard");
        }
    } catch (e) {
        console.log(e);
    }


};
///////////////////////////////////////////
const followUser = async (_currentUserId, _toFollowUserId) => {
    try {
        let data = await blog.updateOne({
            _id:_id,
         _currentUserId:_currentUserId
        }, {
            $push: {
                following: following,
                _toFollowUserId:_toFollowUserId
            }
        });
        data
            ?
            console.log("body Updated successfully") :
            console.log("update failed");
    } catch (err) {
        console.log(err);
    }
};
/////////////////////////////////////////
const unfollowUser = async (_currentUserId, _toUnfollowUserId) => {
    try {
        let data = await blog.updateOne({
            _id: currentUserId
        }, {
            $pull: {
                following: _toUnfollowUserId
            }
        });
        data
            ?
            console.log("body Updated successfully") :
            console.log("update failed");
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    Register,
    Login,
    followUser,
    unfollowUser
}; // يتم تصدير الدوال الثلاث ليتم استخدامها في الملفات الأخرى.
////////////////////////////////////////