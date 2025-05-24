function Table({ children }) {
    return (
        <div >
            <table className="mx-auto w-[1000px]" >{children}</table>
        </div>
    );
}
export default Table;

function TableHeader({ children }) {
    return (
        <thead className="text-gray-600" >
            <tr >{children}</tr>
        </thead>
    );
}

function TableBody({ children }) {
    return <tbody >{children}</tbody>;
}

function TableRow({ children }) {
    return (
            <tr >{children}</tr>
    );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
