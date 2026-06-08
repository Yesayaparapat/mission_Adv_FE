import { useState, useEffect } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../../services/api/studentsService.js';

export function useStudents() {
    const [siswa, setSiswa] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formNama, setFormNama] = useState("");
    const [formNilai, setFormNilai] = useState("");
    const [formKelas, setFormKelas] = useState("");
    const [editId, setEditId] = useState(null);
    const resetForm = () => {
        setFormNama("");
        setFormNilai("");
        setFormKelas("");
    };

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
            setSiswa((prev) => [...prev, created]);
            resetForm();
        } catch (err) {
            setError("Gagal menambahkan data siswa.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (student) => {
        setEditId(student.id);
        setFormNama(student.nama);
        setFormNilai(student.nilai);
        setFormKelas(student.kelas);
    };

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

    const handleDelete = async (id) => {
        if (!window.confirm("Yakin ingin menghapus data siswa ini?")) return;

        setLoading(true);
        try {
            await deleteStudent(id);
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
