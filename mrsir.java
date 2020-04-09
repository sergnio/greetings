import javax.swing.JFrame; 
import javax.swing.JLabel; 
public class HelloWorld {
    public static void main(String[] args) {
        JFrame frame = new JFrame();           
        frame.setTitle("Gutenberg!");                 
        frame.add(new JLabel("Glorious, Mr Sir! It was nice and relaxing."));
        frame.pack();                          
        frame.setLocationRelativeTo(null);     
        frame.setVisible(true);                
    }
}
