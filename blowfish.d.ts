declare module 'blowfish' {
	class Blowfish {
		constructor(key: string)

		Fbf_P(): number[]
		Fbf_S0(): number[]
		Fbf_S1(): number[]
		Fbf_S2(): number[]
		Fbf_S3(): number[]

		encrypt(t: string): string
		decrypt(t: string): string

		wordescape(t: string): string
		wordunescape(t: string): string

		round(a: number, b: number, n: number): number
		encipher(): void
		decipher(): void
	}
	export = Blowfish
}
