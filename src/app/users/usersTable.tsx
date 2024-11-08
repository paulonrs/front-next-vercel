import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserItem } from "./userItem";

import { useEffect, useState } from "react";
import { PaginationButton } from "@/components/paginationButton";
import { Icons } from "@/components/icons";
import { getUsers } from "@/services/usersService";

export function UsersTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize: number = 10;

  useEffect(() => {
    fetchUsers(page, pageSize);
  }, []);

  useEffect(() => {
    fetchUsers(page, pageSize);
  }, [page]);

  const fetchUsers = async (page: number, pageSize: number) => {
    try {
      const search = "";
      let { data: users, total } = await getUsers(search);

      setTotal(total);
      setUsers(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Icons.spinner className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>
          Manage your users and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {total === 0 ? 0 : (page - 1) * pageSize + 1} -{" "}
              {pageSize * page > total ? total : pageSize * page}
            </strong>{" "}
            of <strong>{total}</strong>
          </div>

          <PaginationButton
            page={page}
            pageSize={pageSize}
            total={total}
            onPageChange={(newPage) => setPage(newPage)}
          ></PaginationButton>
        </form>
      </CardFooter>
    </Card>
  );
}
