export interface Cliente{
    id?: any; // ? pode ou nao existir
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;
}