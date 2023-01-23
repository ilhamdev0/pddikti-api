export function TableMahasiswa({ content }) {
    return (
        <div className="overflow-auto h-96">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="bg-gray-200 dark:bg-slate-700"></th>
                        <th className="bg-gray-200 dark:bg-slate-700">Nama</th>
                        <th className="bg-gray-200 dark:bg-slate-700">NIM/NPM</th>
                        <th className="bg-gray-200 dark:bg-slate-700">Nama Lembaga</th>
                        <th className="bg-gray-200 dark:bg-slate-700">Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((data, index) => (
                        <tr key={index} className="hover">
                            <th></th>
                            <td><a className="link link-primary dark:link-accent link-hover" href={data.link} target="_blank">{data.nama}</a></td>
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
                        <th className="bg-gray-200 dark:bg-slate-700"></th>
                        <th className="bg-gray-200 dark:bg-slate-700">Nama</th>
                        <th className="bg-gray-200 dark:bg-slate-700">NIDN</th>
                        <th className="bg-gray-200 dark:bg-slate-700">Nama Lembaga</th>
                        <th className="bg-gray-200 dark:bg-slate-700">Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((data, index) => (
                        <tr key={index} className="hover">
                            <th></th>
                            <td><a className="link link-primary dark:link-accent link-hover" href={data.link} target="_blank">{data.nama}</a></td>
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