import java.util.Scanner;

public class index {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); // إنشاء كائن Scanner
        System.out.print("Enter a number: ");
        int number = input.nextInt(); // قراءة رقم من المستخدم
        System.out.println("You entered: " + number);
        input.close(); // إغلاق Scanner
    }
}
