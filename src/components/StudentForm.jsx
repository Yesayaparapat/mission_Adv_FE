function StudentForm({ formNama, setFormNama, formNilai, setFormNilai, formKelas, setFormKelas, editId, handleCreate, handleUpdate, resetForm }) {
    return (
        <section className="border border-[#077A7D]/20 rounded-2xl p-6 shadow-md hover:border-[#077A7D]/35 transition-all bg-white/70 backdrop-blur-md">
            <h2 className="text-base font-bold text-[#06202B] mb-5 pb-3 border-b border-[#06202B]/10">
                {editId ? "Edit Data Siswa" : "Tambah Siswa Baru"}
            </h2>
            <form onSubmit={editId ? handleUpdate : handleCreate}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-nama" className="text-xs font-semibold text-[#06202B]/80 uppercase tracking-wide">
                        Nama Lengkap
                    </label>
                    <input
                        id="input-nama"
                        type="text"
                        placeholder="Contoh: Budi Santoso"
                        value={formNama}
                        onChange={(e) => setFormNama(e.target.value)}
                        className="bg-white border border-[#06202B]/20 rounded-lg text-[#06202B] text-sm px-3 py-2.5 outline-none focus:border-[#077A7D] focus:ring-2 focus:ring-[#7AE2CF]/40 transition-all placeholder:text-[#06202B]/40"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-nilai" className="text-xs font-semibold text-[#06202B]/80 uppercase tracking-wide">
                        Nilai (0–100)
                    </label>
                    <input
                        id="input-nilai"
                        type="number"
                        placeholder="Contoh: 85"
                        min="0"
                        max="100"
                        value={formNilai}
                        onChange={(e) => setFormNilai(e.target.value)}
                        className="bg-white border border-[#06202B]/20 rounded-lg text-[#06202B] text-sm px-3 py-2.5 outline-none focus:border-[#077A7D] focus:ring-2 focus:ring-[#7AE2CF]/40 transition-all placeholder:text-[#06202B]/40"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-kelas" className="text-xs font-semibold text-[#06202B]/80 uppercase tracking-wide">
                        Kelas
                    </label>
                    <select
                        id="input-kelas"
                        value={formKelas}
                        onChange={(e) => setFormKelas(e.target.value)}
                        className="bg-white border border-[#06202B]/20 rounded-lg text-[#06202B] text-sm px-3 py-2.5 outline-none focus:border-[#077A7D] focus:ring-2 focus:ring-[#7AE2CF]/40 transition-all"
                    >
                        <option value="">Pilih Kelas</option>
                        <option value="X IPA">X IPA</option>
                        <option value="X IPS">X IPS</option>
                        <option value="XI IPA">XI IPA</option>
                        <option value="XI IPS">XI IPS</option>
                        <option value="XII IPA">XII IPA</option>
                        <option value="XII IPS">XII IPS</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="flex-1 bg-[#7AE2CF] hover:bg-[#65ccba] text-[#06202B] text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm hover:-translate-y-0.5 active:translate-y-0 border border-[#077A7D]/30 transition-all"
                    >
                        {editId ? "Simpan Perubahan" : "Tambah Siswa"}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default StudentForm;
