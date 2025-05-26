import { TiArrowSortedDown } from "react-icons/ti"
import Table from "../UI/Table"
import Th from "../UI/Th"



function UserList() {
    return (
        <div className="bg-slate-100" >
            <Table>

                <Table.Header>
                    <th>
                        <Th lable="Name" />
                    </th>
                    <th>
                        <Th lable="Email" />
                    </th>

                    <th>
                        <Th lable="PhoneNumber" />
                    </th>

                    <th>
                        <Th lable="Gender" />
                    </th>

                    <th>

                    </th>
                </Table.Header>


                <Table.Body>
                    <Table.Row>
                        <td className="p-3 gap-x-2 rounded-l-2xl flex items-center">
                            <div className="flex items-center gap-x-3" >
                                <img className="w-9 h-9 rounded-full" src="img/user-avatar-1.jpg" alt="" />
                                sobhan soqandi
                            </div>
                        </td>

                        <td className="p-3 px-4  py-2">sobhansoqandi@gmail.com</td>
                        <td className="p-3 px-4 py-2">09159946617</td>
                        <td className="p-3 px-4 py-2 rounded-r-2xl">Male</td>
                    </Table.Row>
                    <Table.Row>
                        <td className="p-3 gap-x-2 rounded-l-2xl flex items-center mt-20">
                            <div className="flex items-center gap-x-3" >
                                <img className="w-9 h-9 rounded-full" src="img/user-avatar-1.jpg" alt="" />
                                sobhan soqandi
                            </div>
                        </td>

                        <td className="p-3 px-4 py-2">sobhansoqandi@gmail.com</td>
                        <td className="p-3 px-4 py-2">09159946617</td>
                        <td className="p-3 px-4 py-2 rounded-r-2xl">Male</td>
                    </Table.Row>
                </Table.Body>

            </Table>
        </div>
    )
}

export default UserList
