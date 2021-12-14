export interface Aqi{
    aqiFromThirdPartyService: AqiFromThirdPartyService,
    aqiFromUSB: number
}

export interface AqiFromThirdPartyService{
    aqi: string,
    station: object,
    time: object,
    uid: number
}
export interface Gerente{
  nombre: String,
  puesto: String,
  correo: String,
  pass: String
}
