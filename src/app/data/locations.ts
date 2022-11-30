export default class Locations {

    private static locations: any[] = [];
    public static getAll(): any[] {
        if (this.locations.length == 0) this.init();
        return this.locations;
    }
    public static init() {
        this.locations = [
            { cap: false, pop:  "OK", lat: 13.784147005707334, lon: 121.07438589643938, country: "Russia", name: "Alangilan Campus" },
            { cap: false, pop:  "OK", lat: 13.75432117136701, lon: 121.05303213202065, country: "Russia", name: "Main Campus" },
            { cap: false, pop:  "OK", lat: 13.846793944403991, lon: 121.1969916120825, country: "Russia", name: "Rosario Campus" },
            { cap: false, pop:  "OK", lat: 13.641605245500848, lon: 121.19246672552045, country: "Russia", name: "Lobo Campus" },
            { cap: false, pop:  "OK", lat: 13.885180198583301, lon: 120.91495733454063, country: "Russia", name: "Lemery Campus" },
            { cap: false, pop: "OK", lat: 14.06667154242259, lon: 120.62612426093379, country: "Russia", name: "Nasugbu Campus" },
            { cap: false, pop:  "OK", lat: 13.95667885390969, lon: 121.16304622488558, country: "Russia", name: "Lipa Campus" },
            { cap: false, pop:  "OK", lat: 13.948254824083806, lon: 120.71997206896582, country: "Russia", name: "Balayan Campus" },
            { cap: false, pop:  "OK", lat: 13.756806286680417, lon: 120.93686769624846, country: "Russia", name: "Mabini Campus" },
            { cap: false, pop:  "OK", lat: 13.80237252924221, lon: 121.40371601136988, country: "Russia", name: "San Juan Campus" },
            { cap: false, pop:  "OK", lat: 14.044643303356324, lon: 121.15618282688462, country: "Russia", name: "JPLPC-Malvar Campus" },

        ]
        return this.locations
}
 
}   