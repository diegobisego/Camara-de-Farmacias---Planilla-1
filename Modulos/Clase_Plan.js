class Plan {
    constructor (id_os, id_plan, nombre) {
        this.id_os = id_os;
        this.id_plan = id_plan;
        this.nombre = nombre;
    }

    get Id_os() {
        return this.id_os;
    }

    get Id_plan() {
        return this.id_plan;
    }

    get getNombre() {
        return this.nombre;
    }
}

module.exports = Plan;