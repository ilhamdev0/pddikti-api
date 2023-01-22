import { useState } from 'react'
import { getMahasiswa, getDosen } from 'logic/apiClient'
import { processor as processorMahasiswa } from 'logic/dataMahasiswa'
import { processor as processorDosen } from 'logic/dataDosen'
import { TableMahasiswa, TableDosen } from 'component/table'

export default function HomePage() {
    const [error, setError] = useState(false)

    //spinner
    const [loadingMahasiswa, setLoadingMahasiswa] = useState(false)
    const [loadingDosen, setLoadingDosen] = useState(false)

    //filter
    const [showMahasiswa, setShowMahasiswa] = useState(true)
    const [showDosen, setShowDosen] = useState(false)

    //data
    const [mahasiswa, setMahasiswa] = useState(false)
    const [dosen, setDosen] = useState(false)

    const toggleShowMahasiswa = () => {
        setShowMahasiswa(current => !current)
    }

    const toggleShowDosen = () => {
        setShowDosen(current => !current)
    }

    const pre = () => {
        setLoadingMahasiswa(true)
        setLoadingDosen(true)
        setError(false)
        setMahasiswa(false)
        setDosen(false)
    }

    const cari = (e) => {
        e.preventDefault();
        pre()

        const nama = String(e.target.elements.nama.value);

        if(nama.length <= 0){
            setError("Nama harus diisi")
        }

        getMahasiswa(nama)
            .then(res => {
                setMahasiswa(processorMahasiswa(res.data.mahasiswa))
            })
            .catch(err => {
                setError("Harap Coba Lagi")
                console.error(err.message)
            }).finally(() => {
                setLoadingMahasiswa(false)
            })

        getDosen(nama)
            .then(res => {
                setDosen(processorDosen(res.data.dosen))
            })
            .catch(err => {
                setError("Harap Coba Lagi")
                console.error(err.message)
            }).finally(() => {
                setLoadingDosen(false)
            })
    }

    return (
        <main className='py-4 px-2'>
            {error ?
                <div className="alert alert-error shadow-lg mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! {error}</span>
                    </div>
                </div> :
                null
            }

            <div className='flex gap-x-2'>
                <form onSubmit={cari} className='flex gap-x-2'>
                    <input id='nama' className="input input-bordered w-full max-w-xs" placeholder='nama...' maxLength="75" required />
                    <button type='submit' className="btn btn-primary" >Cari!</button>
                </form>

                {loadingMahasiswa || loadingDosen ?
                    <div role="status" className='w-10 self-center'>
                        <svg aria-hidden="true" className="inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> :
                    null
                }
            </div>

            <div className='flex gap-x-2'>
                <div className="form-control w-36">
                    <label className="label cursor-pointer">
                        <span className="label-text">Mahasiswa</span>
                        <input type="checkbox" defaultChecked={true} onChange={toggleShowMahasiswa} className="toggle toggle-primary" />
                    </label>
                </div>
                <div className="form-control w-28">
                    <label className="label cursor-pointer">
                        <span className="label-text">Dosen</span>
                        <input type="checkbox" onChange={toggleShowDosen} className="toggle toggle-primary" />
                    </label>
                </div>
            </div>

            <hr />

            <div className='flex flex-col gap-y-14 py-8'>
                {mahasiswa && showMahasiswa ?
                    <section>
                        <p className='text-2xl uppercase text-center py-4'>Data Mahasiswa</p>
                        <TableMahasiswa content={mahasiswa} />
                    </section> :
                    null
                }

                {dosen && showDosen ?
                    <section>
                        <p className='text-2xl uppercase text-center py-4'>Data Dosen</p>
                        <TableDosen content={dosen} />
                    </section> :
                    null
                }
            </div>
        </main>
    )
}