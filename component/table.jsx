export function TableMahasiswa({ content }) {
    return (
        <div className="overflow-auto h-96">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama</th>
                        <th>NIM/NPM</th>
                        <th>Nama Lembaga</th>
                        <th>Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((data, index) => (
                        <tr key={index} className="hover">
                            <th></th>
                            <td><a className="link link-primary link-hover" href={data.link} target="_blank">{data.nama}</a></td>
                            <td>{data.nim}</td>
                            <td>{data.pt}</td>
                            <td>{data.prodi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export function TableDosen({ content }) {
    return (
        <div className="overflow-auto h-96">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama</th>
                        <th>NIDN</th>
                        <th>Nama Lembaga</th>
                        <th>Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((data, index) => (
                        <tr key={index} className="hover">
                            <th></th>
                            <td><a className="link link-primary link-hover" href={data.link} target="_blank">{data.nama}</a></td>
                            <td>{data.nidn}</td>
                            <td>{data.pt}</td>
                            <td>{data.prodi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}