declare module 'blowfish' {
	export default class Blowfish {
		public constructor(key: string)
		
		public encrypt(t: string): string
		public decrypt(t: string): string

		protected Fbf_P(): number[]
		protected Fbf_S0(): number[]
		protected Fbf_S1(): number[]
		protected Fbf_S2(): number[]
		protected Fbf_S3(): number[]

		protected wordescape(t: string): string
		protected wordunescape(t: string): string

		protected round(a: number, b: number, n: number): number
		protected encipher(): void
		protected decipher(): void
	}
}
