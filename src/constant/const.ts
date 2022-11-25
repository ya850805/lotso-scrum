export const TASKS_KEY = "lotso-scrum-tasks"
export const TASK_STORY_POINTS = [1, 2, 3, 5, 8, 13, 21]
export const INIT_SCRUM_TASK = [
    {
        id: 1,
        name: "會員系統(登入、註冊、權限管理)",
        link: "https://www.atlassian.com/software/jira",
        points: "",
        isToggleOpen: false
    },
    {
        id: 2,
        name: "前台職缺列表、應徵",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[3],
        isToggleOpen: false
    },
    {
        id: 3,
        name: "應徵者的線上履歷編輯器",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[4],
        isToggleOpen: false
    },
    {
        id: 4,
        name: "後台職缺管理功能(資訊上架、下架、顯示資料)",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[6],
        isToggleOpen: false
    },
]

export const SPRINT_MEETINGS = [
    {
        id: 1,
        name: "每日站立會議(Daily Scrum)"
    },
    {
        id: 2,
        name: "短衝檢視會議(Sprint Review)"
    },
    {
        id: 3,
        name: "短衝自省會議(Sprint Retrospective)"
    }
]

enum retroItemMood {
    happy, sad
}
export const RETRO_ITEMS = [
    {
        id: 1,
        mood: retroItemMood.sad,
        description: "我這次幫大家救了很多火欸，也拜託一下"
    },
    {
        id: 2,
        mood: retroItemMood.sad,
        description: "可以記錄這次的開發時間，下次預估時間可以更加準確"
    },
    {
        id: 3,
        mood: retroItemMood.happy,
        description: "可以討論一下設計與前端如何分配切版的範圍，會減少重疊"
    },
    {
        id: 4,
        mood: retroItemMood.happy,
        description: "大家在開發時都互相cover，讓開發時程準時交付"
    },
    {
        id: 5,
        mood: retroItemMood.sad,
        description: "開發時間預估時間不準確，後端請改進，不要一直delay"
    },
    {
        id: 6,
        mood: retroItemMood.sad,
        description: "希望設計可以不要一直來回修改，程式負擔很重"
    }
]
