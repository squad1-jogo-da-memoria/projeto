package application;


public class Tests {

	public static void main(String[] args) {

		String[] easy = new String[14];

		easy[0] = "Vila da folha";
		easy[1] = "Naruto";
		easy[2] = "Sakura";
		easy[3] = "Sasuke";
		easy[4] = "Jiraya";
		easy[5] = "Kakashi";
		easy[6] = "Shikamaru";
		easy[7] = "vila da folha";
		easy[8] = "naruto";
		easy[9] = "sakura";
		easy[10] = "sasuke";
		easy[11] = "jiraya";
		easy[12] = "kakashi";
		easy[13] = "shikamaru";

		for (int i = 0; i < easy.length; i++) {
			int c = (int) (Math.random() * 12);
			Math.ceil(c);

			if (c < easy.length) {
				System.out.println("Posição " + (i + 1) + " Carta " + easy[c]);
			}
		}

	}

}
