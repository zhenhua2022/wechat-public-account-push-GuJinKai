/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9fc227ab7bde69d8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'adda6fc4afae4e07ee3a544023357158',

  PROVINCE: '贵州',
  CITY: '贵阳',
  
  USERS: [
    //顾凯
    {
      // 想要发送的人的名字
      name: '罗荣荣',
      
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //id: 'oNKGd5x4UCYEQ7YoiY0rw4dPAN-c',//妹
      id: 'oguWs5811jyNHIcSlXiJ-COe2eg8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OJ0DPJqk3YIsSNMXRKdKUYvtp2qbCCUo9E0K-DsbPH0',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '妹妹', year: '1998', date: '04-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哥哥', year: '1997', date: '12-20',
        },
      ],
      
    }
    //顾凯
    
  ],//users


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'OAjEfcj0l5iW-sbUAnICRDu-tB1PI-Kay61ZwIFIqRs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oguWs5811jyNHIcSlXiJ-COe2eg8',
    }
  ],

}

module.exports = USER_CONFIG

