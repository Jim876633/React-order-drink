const data = {
    standard: [
        {
            category: "sugar",
            title: "甜度",
            options: ["無糖", "微糖", "半糖", "少糖", "全糖"],
            type: "radio",
        },
        {
            category: "ice",
            title: "冰塊",
            options: ["去冰", "微冰", "半冰", "少冰", "正常冰"],
            type: "radio",
        },
        {
            category: "toppings",
            title: "配料",
            options: ["珍珠", "粉圓", "仙草凍", "椰果", "布丁", "粉條"],
            type: "checkbox",
        },
    ],
    products: [
        {
            id: 1,
            title: "珍珠奶茶",
            recommend: { sugar: "微糖", ice: "微冰" },
            price: 65,
        },
        {
            id: 2,
            title: "蜂蜜檸檬",
            recommend: { sugar: "全糖", ice: "少冰" },
            price: 50,
        },
        {
            id: 3,
            title: "水果茶",
            recommend: { sugar: "無糖", ice: "半冰" },
            price: 60,
        },
        {
            id: 4,
            title: "熟成紅茶",
            recommend: { sugar: "微糖", ice: "微冰" },
            price: 35,
        },
        {
            id: 5,
            title: "芒果冰沙",
            recommend: { sugar: "全糖", ice: "正常冰" },
            price: 70,
        },
        {
            id: 6,
            title: "鐵觀音拿鐵",
            recommend: { sugar: "半糖", ice: "去冰" },
            price: 65,
        },
        {
            id: 7,
            title: "四季青茶",
            recommend: { sugar: "無糖", ice: "微冰" },
            price: 35,
        },
        {
            id: 8,
            title: "多多綠茶",
            recommend: { sugar: "少糖", ice: "正常冰" },
            price: 35,
        },
    ],
};
export default data;
