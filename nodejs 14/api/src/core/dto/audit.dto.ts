export default class Audit {
    enabled:number = 1
    estado:boolean = true
    usuario_creacion: string = 'Admin'
    fecha_creacion: Date = new Date()
    usuario_modificacion: string = 'Admin'
    fecha_modificacion: Date = new Date()
}

export const AuditClass = new Audit()