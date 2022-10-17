/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx068ae71002eb72ff',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0141c207525b78f0d0c15da1def6c950',

  PROVINCE: '广西',
  CITY: '桂林',
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '憨憨夏',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //id: 'oNKGd5x4UCYEQ7YoiY0rw4dPAN-c',//夏
      id: 'oNKGd569zIxI6odnyJDSpgrjqgVo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'zwzCpMZBexXRznS5o9iekAE81Rb1lIRH8uDzxqlL57Y',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-22',
      horoscopeDateType: '今日',
      openUrl: 'https://s.weibo.com/top/summary?cate=realtimehot',
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-26' },
      ],
      
      courseSchedule:[
        // 周一
        [
          '08:00-09:35 高等数学1',
          '08:00-09:35 高等数学2',
          '08:00-09:35 高等数学3',
          '08:00-09:35 高等数学4',
          '08:00-09:35 高等数学5',
          '08:00-09:35 高等数学6',
          '08:00-09:35 高等数学7',
          '08:00-09:35 高等数学8',
          '08:00-09:35 高等数学9',
          '09:50-11:25 高等物理'
        ],
        // 周二
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周三
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周四
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周五
        [
          '08:00-09:35 高等数学',
          '09:50-11:25 高等物理'
        ],
        // 周六
        [
          '呀嘿，没课呦，快去找哥哥贴贴'
        ],
        // 周日
        [
          '呀嘿，没课呦，快去找哥哥亲亲'
        ]
        
      ]
      
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '7DZ0vrT5bcpHHKH3vntpRymlFEnRIxJtb-Vr2-zzTgs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNKGd569zIxI6odnyJDSpgrjqgVo',
    }
  ],

}

module.exports = USER_CONFIG

