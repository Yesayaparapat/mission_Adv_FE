import { useState, useEffect } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../../services/api/studentsService.js';

export function useStudents() {
    const [siswa, setSiswa] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // State untuk form input
    const [formNama, setFormNama] = useState("");
    const [formNilai, setFormNilai] = useState("");
    const [formKelas, setFormKelas] = useState("");
    const [editId, setEditId] = useState(null);

    // Helper untuk reset form input
    const resetForm = () => {
        setFormNama("");
        setFormNilai("");
        setFormKelas("");
    };

    // 1. READ: Mengambil data siswa dari API ketika di-mount
    const fetchStudents = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getStudents();
            setSiswa(data);
        } catch (err) {
            setError("Gagal mengambil data siswa dari API.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // 2. CREATE: Menambahkan siswa baru ke API
    const handleCreate = async (e) => {
        e.preventDefault();
        if (!formNama || !formNilai || !formKelas) return;

        setLoading(true);
        try {
            const studentData = {
                nama: formNama,
                nilai: Number(formNilai),
                kelas: formKelas,
            };
            const created = await createStudent(studentData);
            // Update state lokal dengan data baru dari API
            setSiswa((prev) => [...prev, created]);
            resetForm();
        } catch (err) {
            setError("Gagal menambahkan data siswa.");
        } finally {
            setLoading(false);
        }
    };

    // 3. EDIT (Step 1): Memasukkan data terpilih ke form input
    const handleEdit = (student) => {
        setEditId(student.id);
        setFormNama(student.nama);
        setFormNilai(student.nilai);
        setFormKelas(student.kelas);
    };

    // 4. UPDATE (Step 2): Menyimpan perubahan data siswa ke API
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!editId || !formNama || !formNilai || !formKelas) return;

        setLoading(true);
        try {
            const studentData = {
                nama: formNama,
                nilai: Number(formNilai),
                kelas: formKelas,
            };
            const updated = await updateStudent(editId, studentData);
            // Map state lokal untuk memperbarui item yang diedit
            setSiswa((prev) =>
                prev.map((s) => (s.id === editId ? updated : s))
            );
            setEditId(null);
            resetForm();
        } catch (err) {
            setError("Gagal memperbarui data siswa.");
        } finally {
            setLoading(false);
        }
    };

    // 5. DELETE: Menghapus data siswa dari API
    const handleDelete = async (id) => {
        if (!window.confirm("Yakin ingin menghapus data siswa ini?")) return;

        setLoading(true);
        try {
            await deleteStudent(id);
            // Filter state lokal untuk menghapus item
            setSiswa((prev) => prev.filter((s) => s.id !== id));
            if (editId === id) {
                setEditId(null);
                resetForm();
            }
        } catch (err) {
            setError("Gagal menghapus data siswa.");
        } finally {
            setLoading(false);
        }
    };

    // 6. Batal Edit
    const handleCancelEdit = () => {
        setEditId(null);
        resetForm();
    };

    return {
        siswa,
        loading,
        error,
        editId,
        formNama, setFormNama,
        formNilai, setFormNilai,
        formKelas, setFormKelas,
        handleCreate,
        handleEdit,
        handleUpdate,
        handleDelete,
        handleCancelEdit,
        resetForm,
    };
}
