import { useStudents } from './components/hooks/UseStudents';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

function App() {
  const {
    siswa,
    error,
    editId,
    formNama, setFormNama,
    formNilai, setFormNilai,
    formKelas, setFormKelas,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
  } = useStudents();

  return (
    <div className="min-h-screen w-full bg-[#FDEB9E] text-[#06202B] flex flex-col font-sans">
      <header className="py-10 text-center relative overflow-hidden bg-gradient-to-b from-[#077A7D]/15 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,122,125,0.06),transparent_50%)]"></div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#06202B] mb-2 relative">
          Manajemen Data Siswa
        </h1>
      </header>
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 flex flex-col gap-6 relative">
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-700 text-sm px-4 py-3 rounded-xl flex justify-between items-center animate-pulse">
            <span className="font-semibold">Error: {error}</span>
            <button
              onClick={() => window.location.reload()}
              className="text-xs underline hover:text-red-900 font-bold"
            >
              Segarkan Halaman
            </button>
          </div>
        )}
        <StudentForm
          formNama={formNama} setFormNama={setFormNama}
          formNilai={formNilai} setFormNilai={setFormNilai}
          formKelas={formKelas} setFormKelas={setFormKelas}
          editId={editId}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
        <StudentTable
          siswa={siswa}
          editId={editId}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
