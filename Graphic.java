// abstract class Figure{
//     protected String type;
//     protected String area;

//     // Constructor function
//     public Figure(String type){
//         this.type = type;
//         this.area = 0;
//     }

//     public abstract void calcuateArea();

//     public void display(){
//         System.out.println("Type: "+type);
//         System.out.println("Area: "+area);
//     }
// }

// // Derive open class from Figure
// class Open extends Figure {
//     // Data members
//     protected int numPoints;
    
//     // Constructor
//     public Open(String type, int numPoints) {
//         super(type);
//         this.numPoints = numPoints;
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//         System.out.println("Number of points: " + numPoints);
//     }
// }

// class Close extends Figure {
//     // Data members
//     protected String color;
    
//     // Constructor
//     public Close(String type, String color) {
//         super(type);
//         this.color = color;
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//         System.out.println("Color: " + color);
//     }
// }
// // Derive polygon class from Close
// class Polygon extends Close {
//     // Data members
//     protected int numSides;
    
//     // Constructor
//     public Polygon(String type, String color, int numSides) {
//         super(type, color);
//         this.numSides = numSides;
//     }
    
//     // Overridden method to calculate area
//     public void calculateArea() {
//         // Calculation for polygon area goes here
//         area = 0;
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//         System.out.println("Number of sides: " + numSides);
//     }
// }

// // Derive eclipse class from Close
// class Eclipse extends Close {
//     // Data members
//     protected double majorAxis;
//     protected double minorAxis;
    
//     // Constructor
//     public Eclipse(String type, String color, double majorAxis, double minorAxis) {
//         super(type, color);
//         this.majorAxis = majorAxis;
//         this.minorAxis = minorAxis;
//     }
    
//     // Overridden method to calculate area
//     public void calculateArea() {
//         // Calculation for eclipse area goes here
//         area = 0;
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//         System.out.println("Major axis: " + majorAxis);
//         System.out.println("Minor axis: " + minorAxis);
//     }
// }

// // Derive line class from Open
// class Line extends Open {
//     // Constructor
//     public Line(String type, int numPoints) {
//         super(type, numPoints);
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//     }
// }

// // Derive polyline class from Open
// class Polyline extends Open {
//     // Data members
//     protected double length;
    
//     // Constructor
//     public Polyline(String type, int numPoints, double length) {
//         super(type, numPoints);
//         this.length = length;
//     }
    
//     // Overridden method to display data members
//     public void display() {
//         super.display();
//         System.out.println("Length: " + length);
//     }
// }


// public class Graphic {
//     public static void Main(String args[]) {
//         Polyline foo = new Polyline();  
//         System.out.println(foo);
//     }
// }