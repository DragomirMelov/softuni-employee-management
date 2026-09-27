export const fromIsoDate = (isoDate) =>{
    const date = new Date(isoDate);

    const formateDate = date.toLocaleString("en-US",{
        year: "numeric",
        month: 'long',
        day: 'numeric'
    })
    return formateDate
}