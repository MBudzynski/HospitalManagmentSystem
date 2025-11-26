import Sidebar from "../component/Sidebar.tsx";
import './css/DepartmentManagePage.css'
import { useState } from "react";

interface Department {
    code: string;
    name: string;
    description: string;
}

const mockDepartments: Department[] = [
    { code: '001', name: 'Oddział A', description: 'Opis oddziału A' },
    { code: '002', name: 'Oddział B', description: 'Opis oddziału B' },
    { code: '003', name: 'Oddział C', description: 'Opis oddziału C' },
];

export const DepartmentManagePage = () => {

    const [departments, setDepartments] = useState<Department[]>(mockDepartments);
    const [selectedDept, setSelectedDept] = useState<Department | null>(null);
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        const filtered = mockDepartments.filter(d =>
            d.name.toLowerCase().includes(searchText.toLowerCase()) ||
            d.code.includes(searchText)
        );
        setDepartments(filtered);
    };

    const handleSelect = (dept: Department) => {
        setSelectedDept(dept);
    };

    return (
        <div className="department-page">
            <Sidebar />

            <div className="main-content">

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Wyszukaj oddział..."
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>Szukaj</button>
                </div>

                <div className="department-table-wrapper">
                    <table className="department-table">
                        <thead>
                        <tr>
                            <th>Kod</th>
                            <th>Oddział</th>
                            <th>Nazwa</th>
                        </tr>
                        </thead>
                        <tbody>
                        {departments.map((dept) => (
                            <tr key={dept.code} onClick={() => handleSelect(dept)}>
                                <td>{dept.code}</td>
                                <td>{dept.name}</td>
                                <td>{dept.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {selectedDept && (
                    <div className="department-details">
                        <h3>Szczegóły oddziału</h3>
                        <p><strong>Kod:</strong> {selectedDept.code}</p>
                        <p><strong>Nazwa:</strong> {selectedDept.name}</p>
                        <p><strong>Opis:</strong> {selectedDept.description}</p>
                    </div>
                )}
            </div>

            <div className="action-bar">
                <button>Dodaj</button>
                <button>Edytuj</button>
                <button>Usuń</button>
            </div>
        </div>
    );
}

export default DepartmentManagePage;