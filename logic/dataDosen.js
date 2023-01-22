const splitter = (text) => {
    if (text.includes("Cari kata kunci")) {
        return {
            nama: "-",
            nidn: "-",
            pt: "-",
            prodi: "-"
        }
    }

    const data = text.split(',')

    return {
        nama: data[0],
        nidn: data[1].split(':')[1],
        pt: data[2].split(':')[1],
        prodi: data[3].split(':')[1]
    }
}

export const processor = data => {
    return data.map(x => (
        { ...splitter(x.text), link: `https://pddikti.kemdikbud.go.id${x["website-link"]}` }
    ))
}