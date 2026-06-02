function StudentTable({ siswa, editId, handleEdit, handleDelete }) {
    return (
        <section className="border border-[#077A7D]/20 rounded-2xl p-6 shadow-md bg-white/70 backdrop-blur-md">
            <h2 className="text-base font-bold text-[#06202B] mb-5 pb-3 border-b border-[#06202B]/10 flex items-center gap-3">
                Daftar Siswa
                <span className="bg-[#077A7D]/10 text-[#077A7D] border border-[#077A7D]/20 text-xs font-bold px-3 py-0.5 rounded-full">
                    {siswa.length} siswa
                </span>
            </h2>
            {siswa.length === 0 ? (
                <div className="text-center py-16 text-[#06202B]/60">
                    <p className="text-sm font-medium">Belum ada data siswa. Tambahkan lewat form di atas!</p>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-[#077A7D]/15">
                    <table className="w-full text-sm">
                        <thead className="bg-[#077A7D]/10 text-[#06202B]">
                            <tr>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">NO</th>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">Nama</th>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">Kelas</th>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">Nilai</th>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">Status</th>
                                <th className="text-left text-xs font-bold uppercase tracking-wider px-4 py-3 border-b border-[#06202B]/10">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswa.map((s, index) => (
                                <tr
                                    key={s.id}
                                    className={
                                        "border-b border-[#06202B]/10 last:border-0 transition-colors hover:bg-[#7AE2CF]/15 " +
                                        (editId === s.id ? "bg-[#7AE2CF]/20 border-l-2 border-l-[#077A7D]" : "")
                                    }
                                >
                                    <td className="px-4 py-3 text-[#06202B]/80 font-medium">{index + 1}</td>
                                    <td className="px-4 py-3 text-[#06202B] font-semibold">{s.nama}</td>
                                    <td className="px-4 py-3">
                                        <span className="text-[#077A7D] bg-[#077A7D]/10 text-xs px-2.5 py-1 rounded-md border border-[#077A7D]/25 font-bold">
                                            {s.kelas}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-[#06202B] font-bold">{s.nilai}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        {s.nilai >= 75 ? (
                                            <span className="bg-[#077A7D]/20 text-[#077A7D] border border-[#077A7D]/35 text-xs font-bold px-2.5 py-1 rounded-full">
                                                Lulus
                                            </span>
                                        ) : (
                                            <span className="bg-yellow-500/10 text-yellow-700 border border-yellow-500/25 text-xs font-bold px-2.5 py-1 rounded-full">
                                                Remedial
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(s)}
                                                className="bg-[#7AE2CF]/30 hover:bg-[#7AE2CF] text-[#06202B] border border-[#077A7D]/35 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(s.id)}
                                                className="bg-red-500/10 hover:bg-red-500 text-red-700 hover:text-white border border-red-500/20 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    )
}

export default StudentTable;
