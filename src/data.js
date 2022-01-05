const introInfo = {
    name: '劉耀奎(Heylin Liu)',
    title: 'Java Developer',
    location: '',
    description: '',
    image: 'ec.jpg',
}

//dynamic icon
const socialMediaInfo = [
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/%E8%80%80%E5%A5%8E-%E5%8A%89-164b0a9b/',
        username: 'heylin6',
        displayName: '劉耀奎'
    },

    {
        name: 'github',
        link: 'https://github.com/heylin6',
        username: 'heylin6',
        displayName: 'heylin6'
    },
    // {
    //     name: 'globe',
    //     link: '',
    //     username: '',
    //     displayName: ''
    // },
    // {
    //     name: 'stack-overflow',
    //     link: '',
    //     username: '',
    //     displayName:''
    // },
]


const contactInfo = [
    {
        name: 'email',
        context: 'ZO5147yexxo0@gmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:ZO5147yexxo0@gmail.com'
    },
    // {
    //     name: 'phone-square',
    //     context: '+',
    //     size: '23px',
    //     style: "font-size:23px;margin-right: 10px;",
    //     link: ''
    // },
]

const summaryInfo = 
    'Hi, 我是耀奎\r\n'+
    '工業工程系畢業轉行至資訊業至今\r'+
    '目前持續累積經驗與各種領域的知識中\r'+
    '正逐步往架構師的路上前進\r'+
    '每一次的困難或狀況都是珍貴的成長與經歷\r'+
    '故期許能歷經更多的歷練讓自己更為成長\r';

//desc v-html 
const experinceInfo = [
    {
        workAt: '',
        position: 'Java 工程師',
        duration: '2020.6 – 至今',
        description: '派遣公司 , 目前參與各專案累積相關知識與技能',
        techs: ["SpringBoot Gradle","MyBatis","PostgreSQL","EasyUI","LoadRunner","Fortify","SVN","Sourcetree","Gitlab","Swagger"]
    },
    {
        workAt: '九江資訊',
        position: 'Java 工程師',
        duration: '2018.2 - 2019.6',
        description: '博弈公司 , 參與金流系統開發與金流界接',
        techs: ["SpringBoot","Hibernate","MySQL","JQuery","SVN"]
    },
    {
        workAt: '亞科國際',
        position: '.NET 工程師',
        duration: '2017.7 - 2017.12',
        description: '接案公司',
        techs: [".Net webform",".Net MVC","Enitiy Framework 4.5","MSSQL","JQuery","Bitbucket"]
    },
    {
        workAt: '甫東科技',
        position: '.NET 工程師',
        duration: '2016.5 - 2017.5',
        description: '接案公司',
        techs: [".Net webform",".Net MVC","Enitiy Framework 4.5","MSSQL","JQuery","TortoiseSVN","Gitlab"]
    }
]

const educationInfo = [
    {
        school: '中原大學',
        location: '',
        title: '工業工程與系統管理學系',
        duration: '2008.8 – 2013.6',
        description: '學士',
    }
]

const volunteerInfo = [
    // {
    //     organisation: '',
    //     title: '',
    //     duration: '',
    //     description: '',
    // },
]


const certificateInfo = [
    {
        organisation: '資訊工業策進會',
        title: '83期行動應用開發程式班 結業證書',
        duration: '2015.12',
        description: '',
    },
]

const projectInfo = [{
        title: '',
        meta: '',
        description: '',
        images: [
            {
                thumbnail: '',
                original: ''
            }
        ]
    }
]


const skillInfo = [
    {
        name: 'C#',
        rate: 70,
    },
    {
        name: 'Java',
        rate: 85,
    }, 
    {
        name: 'SQL',
        rate: 85,
    },
    {
        name: 'HTML/CSS',
        rate: 75,
    },
    
]

const otherSkillInfo = [
    'Git',
    'SpringMVC',
    'Stored Procedures',
    'Trigger',
    'VueJS',
    'JUnit',
]

const proSkillInfo = [
    '系統架構','代碼重構','資料庫設計','單元測試','AWS or Azure'
]

// 0,1,2,3,4,5
const languageInfo = [
    {
        name: '中文',
        rate: 4,
        level: '精通',
    }
]



const interestInfo = [
    // {
    //     name: 'Swimming',
    //     description: "",
    // },
    // {
    //     name: 'Entrepreneurship Ideas',
    //     description: "",
    // },
    // {
    //     name: 'Smart Home Ideas',
    //     description: "",
    // },
]

export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,
    projectInfo: projectInfo,
    skillInfo: skillInfo,
    certificateInfo: certificateInfo,
    volunteerInfo: volunteerInfo,
    languageInfo: languageInfo,
    contactInfo: contactInfo,
    interestInfo: interestInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo
}