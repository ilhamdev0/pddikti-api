const getSubstring = (str, char1, char2) => {
    return str.substring(
        str.indexOf(char1) + 1,
        str.lastIndexOf(char2)
    );
}

const splitter = (text) => {
    if (text.includes("Cari kata kunci")) {
        return {
            nama: "-",
            pt: "-",
            prodi: "-"
        }
    }

    const data = text.split(',')

    return {
        nama: data[0].split('(')[0],
        nim: getSubstring(data[0],'(',')'),
        pt: data[1].split(':')[1],
        prodi: data[2].split(':')[1]
    }
}

export const processor = data => {
    return data.map(x => (
        { ...splitter(x.text), link: `https://pddikti.kemdikbud.go.id${x["website-link"]}` }
    ))
}