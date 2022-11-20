export const TASKS_KEY = "lotso-scrum-tasks"

export const TASK_STORY_POINTS = [1, 2, 3, 5, 8, 13, 21]

export const INIT_SCRUM_TASK = [
    {
        id: 1,
        name: "會員系統(登入、註冊、權限管理)",
        link: "https://www.atlassian.com/software/jira",
        points: null
    },
    {
        id: 2,
        name: "前台職缺列表、應徵",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[3]
    },
    {
        id: 3,
        name: "應徵者的線上履歷編輯器",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[4]
    },
    {
        id: 4,
        name: "後台職缺管理功能(資訊上架、下架、顯示資料)",
        link: "https://www.atlassian.com/software/jira",
        points: TASK_STORY_POINTS[6]
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