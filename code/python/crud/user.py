class User:
    def __init__(self):
        self.users = {}

    def create(self, user_id, name, email):
        if user_id not in self.users:
            self.users[user_id] = {'name': name, 'email': email}
            return f"Usuário {user_id} criado com sucesso!"
        else:
            return f"Erro: Usuário {user_id} já existe."

    def read(self, user_id):
        if user_id in self.users:
            return self.users[user_id]
        else:
            return f"Erro: Usuário {user_id} não encontrado."

    def read_all(self):
        return self.users

    def update(self, user_id, name=None, email=None):
        if user_id in self.users:
            if name:
                self.users[user_id]['name'] = name
            if email:
                self.users[user_id]['email'] = email
            return f"Dados do usuário {user_id} atualizados com sucesso!"
        else:
            return f"Erro: Usuário {user_id} não encontrado."

    def delete(self, user_id):
        if user_id in self.users:
            del self.users[user_id]
            return f"Usuário {user_id} deletado com sucesso!"
        else:
            return f"Erro: Usuário {user_id} não encontrado."


user_crud = User()

print(user_crud.create(1, "João", "joao@example.com"))
print(user_crud.create(2, "Maria", "maria@example.com"))

print("Todos os usuários:", user_crud.read_all())

print(user_crud.update(2, name="Mariana"))

print(user_crud.delete(1))

print("Todos os usuários:", user_crud.read_all())
