import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface TableProps<T> {
    data: T[];
    columns: (keyof T)[];
    columnLabels?: { [key in keyof T]: string };
    onView?: (item: T) => void;
    onDelete?: (item: T) => void;
    onAdd?: (item: T) => void;
    onFinish?: (item: T) => void;
}

export const DataTable = <T extends object>({
                                                data,
                                                columns,
                                                columnLabels,
                                                onView,
                                                onDelete,
                                                onAdd,
                                                onFinish,
                                            }: TableProps<T>) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                {columns.map((col) => (
                    <th key={String(col)}>
                        {columnLabels ? columnLabels[col] : String(col).toUpperCase()}
                    </th>
                ))}
                {(onView || onDelete || onAdd || onFinish) && <th>Akcje</th>}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {columns.map((col) => (
                        <td key={String(col)}>{String(item[col])}</td>
                    ))}
                    {(onView || onDelete || onAdd || onFinish) && (
                        <td>
                            {onView && (
                                <Button
                                    variant="info"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => onView(item)}
                                >
                                    Szczegóły
                                </Button>
                            )}
                            {onDelete && (
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => onDelete(item)}
                                >
                                    Usuń
                                </Button>
                            )}
                            {onAdd && (
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={() => onAdd(item)}
                                >
                                    Dodaj
                                </Button>
                            )}
                            {onFinish && (
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={() => onFinish(item)}
                                >
                                    Zakończ
                                </Button>
                            )}
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </Table>
    );
};