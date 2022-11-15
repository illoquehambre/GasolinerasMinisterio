// Generated by https://quicktype.io

export interface MunicipiosResponse {
    IDMunicipio: string;
    IDProvincia: string;
    IDCCAA:      string;
    Municipio:   string;
    Provincia:   Provincia;
    CCAA:        Ccaa;
}

export enum Ccaa {
    Andalucia = "Andalucia",
    Aragón = "Aragón",
    Asturias = "Asturias",
    Baleares = "Baleares",
    Canarias = "Canarias",
    Cantabria = "Cantabria",
    CastillaLaMancha = "Castilla la Mancha",
    CastillaYLeón = "Castilla y León",
    Cataluña = "Cataluña",
    Ceuta = "Ceuta",
    ComunidadValenciana = "Comunidad Valenciana",
    Extremadura = "Extremadura",
    Galicia = "Galicia",
    Madrid = "Madrid",
    Melilla = "Melilla",
    Murcia = "Murcia",
    Navarra = "Navarra",
    PaísVasco = "País Vasco",
    RiojaLa = "Rioja (La)",
}

export enum Provincia {
    Albacete = "ALBACETE",
    Alicante = "ALICANTE",
    Almería = "ALMERÍA",
    ArabaÁlava = "ARABA/ÁLAVA",
    Asturias = "ASTURIAS",
    Badajoz = "BADAJOZ",
    BalearsIlles = "BALEARS (ILLES)",
    Barcelona = "BARCELONA",
    Bizkaia = "BIZKAIA",
    Burgos = "BURGOS",
    Cantabria = "CANTABRIA",
    CastellónCastelló = "CASTELLÓN / CASTELLÓ",
    Ceuta = "CEUTA",
    CiudadReal = "CIUDAD REAL",
    CoruñaA = "CORUÑA (A)",
    Cuenca = "CUENCA",
    Cáceres = "CÁCERES",
    Cádiz = "CÁDIZ",
    Córdoba = "CÓRDOBA",
    Gipuzkoa = "GIPUZKOA",
    Girona = "GIRONA",
    Granada = "GRANADA",
    Guadalajara = "GUADALAJARA",
    Huelva = "HUELVA",
    Huesca = "HUESCA",
    Jaén = "JAÉN",
    León = "LEÓN",
    Lleida = "LLEIDA",
    Lugo = "LUGO",
    Madrid = "MADRID",
    Melilla = "MELILLA",
    Murcia = "MURCIA",
    Málaga = "MÁLAGA",
    Navarra = "NAVARRA",
    Ourense = "OURENSE",
    Palencia = "PALENCIA",
    PalmasLas = "PALMAS (LAS)",
    Pontevedra = "PONTEVEDRA",
    RiojaLa = "RIOJA (LA)",
    Salamanca = "SALAMANCA",
    SantaCruzDeTenerife = "SANTA CRUZ DE TENERIFE",
    Segovia = "SEGOVIA",
    Sevilla = "SEVILLA",
    Soria = "SORIA",
    Tarragona = "TARRAGONA",
    Teruel = "TERUEL",
    Toledo = "TOLEDO",
    ValenciaValència = "VALENCIA / VALÈNCIA",
    Valladolid = "VALLADOLID",
    Zamora = "ZAMORA",
    Zaragoza = "ZARAGOZA",
    Ávila = "ÁVILA",
}
