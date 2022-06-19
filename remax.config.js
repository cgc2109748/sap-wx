const WxShake = require('@remax/plugin-wx-shake');
const apiList = ['chooseAddress', 'chooseLocation', 'getLocation', 'onLocationChange']

module.exports = {
    plugins: [
        WxShake(apiList)
    ],
};
