
function buscarProyecto(nombre, proyectos) {
    if (proyectos.length === 0) {
        return "";
    }
    let proyectosEncontrados = [];

    for (const proyecto of proyectos) {
        if (proyecto === nombre) {
            proyectosEncontrados.push(proyecto);
        }
    }

    return proyectosEncontrados.join(", ");
}

describe("buscarProyecto", () => {
    it("No se encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => {
        let proyectos = [];
        expect (buscarProyecto("ejercicio1", proyectos)).toEqual("");
    });
    it("Se ecuentra el proyecto cuando hay solo 1 proyecto", () => {
        let proyectos = [];
        proyectos.push("miUnicoProyecto");
        expect (buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
    });
    it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
        let proyectos = [];
        proyectos.push("Proyecto1");
        proyectos.push("Proyecto2");
        proyectos.push("Proyecto3");
        expect(buscarProyecto("Proyecto2", proyectos)).toEqual("Proyecto2");
    });
    it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
        let proyectos = [];
        proyectos.push("Proyecto1");
        proyectos.push("Proyecto2");
        proyectos.push("Proyecto3");
        proyectos.push("Proyecto2"); 
        expect(buscarProyecto("Proyecto2", proyectos)).toEqual("Proyecto2, Proyecto2");
    });

});