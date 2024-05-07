
function buscarProyecto(nombre, proyectos){
    const numeroCero = 0;
    if (proyectos.length === numeroCero){
        return "";
    }
    let proyectosEncontrados = [];
    const nombreMinusculas = nombre.toLowerCase();
    for(const proyecto of proyectos){
        if(proyecto.toLowerCase().startsWith(nombreMinusculas)){
            proyectosEncontrados.push(proyecto);
        }
    }
    if (proyectosEncontrados.length === numeroCero) {
        return "";
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
    it("Encuentra todas los proyectos similares con las primera/s letra/s de mi busqueda ", () => {
        let proyectos = [];
        proyectos.push("Proyecto1");
        proyectos.push("Papanoel");
        proyectos.push("Nada4");
        proyectos.push("Proyecto2"); 
        expect(buscarProyecto("P", proyectos)).toEqual("Proyecto1, Papanoel, Proyecto2");
    });
    it("No sale nada al no econtrar un proyecto al buscar ", () => {
        let proyectos = [];
        proyectos.push("Proyecto1");
        proyectos.push("Proyecto2");
        proyectos.push("Proyecto3"); 
        expect(buscarProyecto("Proyecto4", proyectos)).toEqual("");
    });

});