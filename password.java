import java.util.Random;
import java.util.Scanner;
public class password {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random ran = new Random();

        System.out.println("Enter the Password Length : ");
        int len = sc.nextInt();
        
        System.out.print("Password is : ");
        for(int i=0;i<len;i++){
            System.out.println(ran.nextInt(10));
        }
    }
}
