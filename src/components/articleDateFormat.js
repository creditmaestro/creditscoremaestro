
module.exports = (articleDate) => {

    let formattedDate, strMonth; 
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date(articleDate);
    strMonth = monthNames[d.getMonth()];
    formattedDate = strMonth + " " + d.getDate() + ", " + d.getFullYear();

    return formattedDate;
}