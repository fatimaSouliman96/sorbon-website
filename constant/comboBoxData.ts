export type optionsValues = {
    options: string,
    value: string
}
type comboBoxType = {
    lable: string,
    options: optionsValues[]
}
export const comboBoxData: comboBoxType[] = [
    {
        
        lable: "Duration",
        options: [
            {
                options: "Duration",
                value: "Duration"
            },
            {
                options: "Dur",
                value: "Dur"
            }
        ]

    },
    {
        lable: "Venue",
        options: [
            {
                options: "Venue",
                value: "venue"
            }
        ]

    },
    {

        lable: "Category",
        options: [
            {
                options: "Category",
                value: "category"
            }
        ]
    },

    
    // {
    //     lable: "Course type",
    //     options: [
    //         {
    //             options: "Course type",
    //             value: "Course type"
    //         }
    //     ]
    // },
]