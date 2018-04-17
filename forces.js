//Instruction= How to use this scene control? When you are to use the control, you should type something that you want to show/ see from the right colum e.g. "Start" "M_force" "Mini_Quiz".
// e.g. usage var scene ="G_force"
// scene control

var scenes = ["Start", "G_force", "E_force", "M_force", "M_examples", "Quiz"];
var scene = "Start"; // pick one from scenes

// These 5 {object} variables hold ALL the other variables used in the 5 areas.
// Create 'sub-variables' using a dot, eg g.planet=100. 
// These sub-variables are called 'attributes'.

// Before the main 'draw' loop begins each of the 'holder' variables is
// passed to a matching setup function to make sure 
// all its attributes (sub-variables) are reset

var s = {};
var g = {};
var e = {};
var m = {};
var q = {};

var setup_start = function(s) {
    s.G=10;//Gravity. F
    s.E=10;//Electrostatic. F
    s.M=10;//Magnetic. F
    s.Q=10;//Mini_Quiz
    s.e1=10;
    s.ey=27;
    s.gX=20;
    s.gY=7;
    s.gW=120;
    s.gH=120;
    s.in_gbox = false;
    s.e=50;
    s.p=50;
    s.py=50;
    s.c=50;
    s.eX=20;
    s.eY=137;
    s.eW=120;
    s.eH=120;
    s.in_ebox = false;
    s.m=50;
    s.mc=50;
    s.mcW=10;
    s.mcH=10;
    s.mX=20;
    s.mY=266;
    s.mH=120;
    s.mW=120;
    s.in_mbox = false;
};

var draw_start = function(s) {
   
    background(255, 255, 255);

    fill(255, 255, 255);
    rect(s.Q*30.20, s.Q*15.4, s.Q*7.5, s.Q*8, s.Q-6);//paper

    fill(196, 181, 181);
    rect(s.Q*30.5, s.Q*14.2, s.Q*7, s.Q*2, s.Q-6);//Clip
    fill(145, 129, 129);
    rect(s.Q*31.4, s.Q*14.2, s.Q*5, s.Q*1, s.Q-6);//some rect. on the top that I don't know the exact name;
    rect(s.Q*36.2, s.Q*15.2, s.Q*0.8, s.Q*0.8, s.Q-6);//hole1
    rect(s.Q*31.0, s.Q*15.2, s.Q*0.8, s.Q*0.8, s.Q-6);//hole2
    
    fill(0, 0, 0);

    rect(s.Q*30.40, s.Q*18.4, s.Q*2, s.Q/1.5, s.Q-4);//1.
    rect(s.Q*32.5, s.Q*19, s.Q*5, s.Q/1.5, s.Q-4);//2.
    rect(s.Q*30.40, s.Q*20, s.Q*2, s.Q/1.5, s.Q-4);//3.
    rect(s.Q*32.5, s.Q*20.8, s.Q*5, s.Q/1.5, s.Q-4);//4.    
     
    strokeWeight(2);
    fill(0, 0, 0);
    textSize(14);
    text("Mini Quiz" ,s.Q*30.8, s.Q*17.9);
    
    fill(255, 255, 255);
    
    //gravitational force
    if (mouseX > s.gX && mouseX <(s.gX+s.gW) && mouseY > s.gY && mouseY < (s.gY+s.gH)) {
        s.in_gbox = true;
        s.ey=81;
    } else {
        s.in_gbox = false;
        s.ey=18;
    }
    
    strokeWeight(2);
    fill(255, 255, 255);
    rect(s.gX, s.gY, s.gW, s.gH, s.G);//Grav. force intro
    strokeWeight(0.001);
    fill(255, 187, 0);
    rect(s.e1+66,s.e1+37,s.e1+5,s.e1+69);//base
    fill(0, 255, 43);
    ellipse(s.e1+74,s.e1+25,s.e1+30,s.e1+30);//leaves
    ellipse(s.e1+73,s.e1+61,s.e1+35,s.e1+35);//leaves
    ellipse(s.e1+56,s.e1+52,s.e1+35,s.e1+35);//leaves
    ellipse(s.e1+93,s.e1+53,s.e1+35,s.e1+35);//leaves
    ellipse(s.e1+58,s.e1+28,s.e1+20,s.e1+20);//leaves
    ellipse(s.e1+91,s.e1+29,s.e1+20,s.e1+20);//leaves
    fill(255, 0, 0);
    ellipse(s.e1+57,s.ey+37,s.e1+5,s.e1+5);//fruit1
    ellipse(s.e1+92,s.e1+47,s.e1+5,s.e1+5);//fruit2
    ellipse(s.e1+75,s.e1+63,s.e1+5,s.e1+5);//fruit3

    //electrostastic force
    if (mouseX > s.eX && mouseX <(s.eX+s.eW) && mouseY > s.eY && mouseY < (s.eY+s.eH)) {
        s.in_ebox = true;
        s.py=5;
    } else {s.in_ebox = false;
        s.py=50;
    }
    
    strokeWeight(2);
    fill(255, 255, 255);
    rect(s.eX, s.eY, s.eW, s.eH, s.G);//Electro. force intro
    //Electro. power(hmm?)
    strokeWeight(0.02);
    fill(221, 255, 0);
    ellipse(s.e+-15,s.e+112,s.e-38,s.e-38);
    ellipse(s.e+-1,s.e+148,s.e-40,s.e-40);
    fill(235, 255, 105);
    ellipse(s.e+-22,s.e+129,s.e-44,s.e-44);
    fill(185, 214, 0);
    ellipse(s.e+23,s.e+133,s.e-38,s.e-38);
    ellipse(s.e+3,s.e+108,s.e-44,s.e-44);
    //comb
    strokeWeight(0.02);
    fill(60, 10, 176);
    rect(s.c-13,s.c+116,s.c-40,s.c-23);//comb leg1
    rect(s.c+65,s.c+116,s.c-40,s.c-23);//comb leg5
    fill(114, 72, 212);
    rect(s.c+5,s.c+116,s.c-40,s.c-23);//comb leg2
    rect(s.c+44,s.c+116,s.c-40,s.c-23);//comb leg4
    fill(205, 184, 255);
    rect(s.c+25,s.c+116,s.c-40,s.c-23);//comb leg3
    fill(77, 0, 255);
    rect(s.c-13,s.c+116,s.c+37,s.c-40);//comb base
    //pieces of paper
    fill(9, 240, 86);
    rect(s.p+55,s.p+190,s.p-35,s.p-38);//paper3
    rect(s.p+19,s.py+176,s.p-35,s.p-38);//paper6/
    fill(168, 255, 197);
    rect(s.p+43,s.p+176,s.p-35,s.p-38);//paper5
    rect(s.p-9,s.py+190,s.p-35,s.p-38);//paper1/
    fill(0, 163, 54);
    rect(s.p+65,s.p+173,s.p-35,s.p-38);//paper4
    rect(s.p+-6,s.py+173,s.p-35,s.p-38);//paper7/
    rect(s.p+23,s.py+190,s.p-35,s.p-38);//paper2/

    //magnetic force
    if (mouseX > s.mX && mouseX <(s.mX+s.mW) && mouseY > s.mY && mouseY < (s.mY+s.mH)) {
        s.in_mbox = true;
        s.mcH=25;
    } else {
        s.in_mbox = false;
        s.mcH=10;
    }
    
    strokeWeight(2);
    fill(255, 255, 255);
    rect(s.mX, s.mY, s.mW,s.mH, s.G);//Mag. force intro
    
    //magnet
    strokeWeight(0.01);
    fill(189, 0, 0);//N shade
    rect(s.m+25,s.m+262,s.m-33,s.m+0,s.m-45);
    fill(10, 0, 191);//S shade
    rect(s.m+20,s.m+218,s.m-28,s.m+1,s.m-45);
    fill(255, 0, 0);//N
    rect(s.m+20,s.m+232,s.m-33,s.m+31);
    fill(13, 0, 255);//S
    rect(s.m+20,s.m+219,s.m-33,s.m-1);
    //text
    fill(255, 255, 255);
    text("S" , 74, 285);
    text("N" , 73, 358);

    //coin
    fill(145, 145, 145);
    ellipse(s.mc+28,s.mc+323,s.mcW+20,s.mcH+5);
    fill(207, 207, 207);
    ellipse(s.mc+28,s.mc+322,s.mcW+17,s.mcH+1);
 
    //Mini_Quiz
    strokeWeight(0.2);
    fill(219, 159, 48);
    rect(s.Q*29, s.Q*13.7, s.Q*10, s.Q*11, s.Q);
     
    fill(255, 255, 255);
    rect(s.Q*30.20, s.Q*15.4, s.Q*7.5, s.Q*8, s.Q-6);//paper

    fill(196, 181, 181);
    rect(s.Q*30.5, s.Q*14.2, s.Q*7, s.Q*2, s.Q-6);//Clip
    fill(145, 129, 129);
    rect(s.Q*31.4, s.Q*14.2, s.Q*5, s.Q*1, s.Q-6);//some rect. on the top that I don't know the exact name;
    rect(s.Q*36.2, s.Q*15.2, s.Q*0.8, s.Q*0.8, s.Q-6);//hole1
    rect(s.Q*31.0, s.Q*15.2, s.Q*0.8, s.Q*0.8, s.Q-6);//hole2
    
    fill(0, 0, 0);

    rect(s.Q*30.40, s.Q*18.4, s.Q*2, s.Q/1.5, s.Q-4);//1.
    rect(s.Q*32.5, s.Q*19, s.Q*5, s.Q/1.5, s.Q-4);//2.
    rect(s.Q*30.40, s.Q*20, s.Q*2, s.Q/1.5, s.Q-4);//3.
    rect(s.Q*32.5, s.Q*20.8, s.Q*5, s.Q/1.5, s.Q-4);//4.    
     
    strokeWeight(2);
    fill(0, 0, 0);
    textSize(14);
    text("Mini Quiz", s.Q*30.8, s.Q*17.9);
    
    //Texts
    var f = createFont("serif");
    textFont(f);
    textSize(20);
    
    fill(70, 191, 0);
    strokeWeight(1);
    text("Gravitational force", 158, 52, 100, 50);
    
    fill(131, 143, 0);
    text("Electrostastic force" , 150, 180, 100, 50);
    
    fill(145, 0, 255);
    text("Magnetic force" , 158, 311, 100, 50);
};

var setup_gravity = function(g) {
    // initialise all these variables as attributes of the 'g' variable
    // so they can be used and modified inside the drawGravity function
    g.planet=100;
    g.B=100;
    g.W=100;
    g.H=100;
    g.E=100;
    g.S=100;
    g.A=100;
    g.F=100;
    g.Fy=100;
    g.Sg=100;
    g.Al1=199;
    g.Al2=216;
    g.Al3=199;
    g.Am1=227;
    g.Am2=250;
    g.Am3=227;
    g.Ar1=178;
    g.Ar2=199;
    g.Ar3=178;
    g.Ar=100;
    g.Ary=100;
};

var draw_gravity = function (g) {
    
    //BACKGROUND
    background(217, 65, 209);//background
    fill(227, 77, 220);//semi-mid background
    rect(0, 100, 400, 100);
    fill(255, 76, 246);//mid background
    rect(0, 200, 400, 100);
    fill(230, 92, 196);//end background
    rect(0, 300, 400, 100);
    
    noStroke();
    
    fill(255, 140, 140);//P.Star2.6 
    ellipse(37,152,g.S-49,g.S-46);
    fill(196, 0, 0);//P.Star2.5
    ellipse(37,149,g.S-50,g.S-50);
    fill(255, 140, 140);//P.Star2.4
    ellipse(36,146,g.S-60,g.S-60);
    fill(196, 0, 0);//P.Star2.3
    ellipse(35,141,g.S-68,g.S-68);
    fill(255, 140, 140);//P.Star2.2
    ellipse(35,137,g.S-78,g.S-78);
    fill(196, 0, 0);//P.Star2.1
    ellipse(36,135,g.S-85,g.S-83);
    fill(255, 140, 140);//P.Star2
    ellipse(36,130,g.S-93,g.S-93);
    
    //e.g.1
    fill(77, 75, 75);//tip of Building1
    rect(g.B-55,g.B+61, g.B-43, g.B-83);
    fill(120, 112, 112);
    rect(g.B-67, g.B+68, g.B-15, g.B+66,4);//base of a building1
    
    //Window1
    fill(45, 69, 105);
    rect(g.W-62, g.W+89, g.W-50, g.W-68);//W1 B1
    rect(g.W-62, g.W+132, g.W-50, g.W-68);//W2 B1
    rect(g.W-62, g.W+177,g.W-50, g.W-68);//W3 B1
    fill(50, 81, 128);
    rect(g.W-54, g.W+87, g.W-45, g.W-70);//W1 B1
    rect(g.W-54, g.W+130, g.W-45, g.W-70);//W2 B1
    rect(g.W-54, g.W+176,g.W-45, g.W-70);//W3 B1
    
    fill(99, 83, 83);//tip of Building2
    rect(g.B+2,g.B+54, g.B-33, g.B-83);
    fill(163, 153, 153);
    rect(g.B-7, g.B+62, g.B-15, g.B+13,4);//base of a building2
    
    //Window2
    fill(114, 130, 201);
    rect(g.B+23, g.W+80, g.W-48, g.W-66);//W1 g.B2 Shade
    rect(g.W+23, g.W+122, g.W-48, g.W-64);//W2 g.B2 Shade
    rect(g.W+15, g.W+167, g.W-47, g.W-66);//W3 g.B2 Shade
    fill(186, 192, 222);
    rect(g.W+22, g.W+78, g.W-50, g.W-70);//W1 B2 
    rect(g.W+22, g.W+120, g.W-50, g.W-70);//W2 B2 
    rect(g.W+15, g.W+163, g.W-50, g.W-70);//W3 B2 
    
    fill(99, 94, 94);//tip of Building3
    rect(g.B-13,g.B+71, g.B-43, g.B-83);
    fill(179, 165, 165);
    rect(g.B+-22,g.B+79, g.B-22, g.B+13,4);//base of a building3
    
    //g.Window3
    fill(151, 157, 191);
    rect(g.W-8, g.W+92, g.W-45, g.W-68);//W1 B3 Shade
    rect(g.W-8, g.W+129, g.W-45, g.W-68);//W2 B3 Shade
    rect(g.W-5, g.W+165, g.W-45, g.W-68);//W3 B3 Shade
    fill(173, 181, 227);
    rect(g.W-10, g.W+89, g.W-50, g.W-70);//W1 B3
    rect(g.W-10, g.W+128, g.W-50, g.W-70);//W2 B3
    rect(90, 265, g.W-50, g.W-70);//W3 B3
    
    //earth
    fill(0, 133, 242);
    ellipse(g.planet+98,g.planet+308,g.planet+287,g.planet+196);//base of a planet
    fill(255, 166, 0);
    ellipse(g.planet+100,g.planet+299,g.planet-65,g.planet-65);//SHADE OF center of a planet
    fill(230, 255, 0);
    ellipse(g.planet+100,g.planet+299,g.planet-80,g.planet-80);//center of a planet
    fill(104, 219, 75);
    ellipse(g.planet+22,g.planet+231,g.planet+30,g.planet+8);//green
    ellipse(g.planet+47,g.planet+224,g.planet+37,g.planet+12);//green
    ellipse(g.planet+63,g.planet+219,g.planet+37,g.planet+12);//green
    ellipse(g.planet+-27,g.planet+281,g.planet+30,g.planet+31);//green
    ellipse(g.planet+-12,g.planet+255,g.planet+9,g.planet+24);//green
    ellipse(g.planet+-41,g.planet+322,g.planet+25,g.planet+74);//green
    ellipse(g.planet+230,g.planet+295,g.planet+37,g.planet+12);//green
    ellipse(g.planet+220,g.planet+268,g.planet+37,g.planet+12);//green
    
    //Human-being^^;(HARDㅜㅜ)
    fill(255, 255, 255);
    ellipse(g.H+135,g.H+141,g.H-70,g.H-70);
    quad(g.H+103,g.H+160,g.H+113,g.H+168,g.H+116,g.H+159,g.H+117,g.H+153);//L.arm1
    quad(g.H+101,g.H+161,g.H+89,g.H+176,g.H+103,g.H+180,g.H+111,g.H+170);//L.arm2
    quad(g.H+88,g.H+179,g.H+85,g.H+186,g.H+94,g.H+189,g.H+101,g.H+183);//L.arm3
    quad(g.H+150,g.H+176,g.H+150,g.H+180,g.H+164,g.H+178,g.H+159,g.H+156);//R.arm1
    quad(g.H+176,g.H+154,g.H+170,g.H+175,g.H+162,g.H+157,g.H+163,g.H+147);//R.arm2
    quad(g.H+176,g.H+142,g.H+178,g.H+150,g.H+164,g.H+145,g.H+169,g.H+136);//R.arm3
    quad(g.H+110,g.H+198,g.H+120,g.H+153,g.H+148,g.H+169,g.H+145,g.H+197);//body1
    quad(g.H+107,g.H+206,g.H+108,g.H+201,g.H+146,g.H+200,g.H+144,g.H+209);//body2
    quad(g.H+107,g.H+209,g.H+106,g.H+231,g.H+120,g.H+227,g.H+124,g.H+211);//leg1
    quad(g.H+127,g.H+211,g.H+132,g.H+227,g.H+145,g.H+231,g.H+145,g.H+213);//reg1
    
    //Explanation box
    fill(181, 125, 212);//shade
    rect(g.E+-90,g.E-85,g.E+156,g.E+10,g.E+8);
    fill(95, 46, 125);//inside
    rect(g.E+-91,g.E-86,g.E+157,g.E+3,g.E+8);
    
    //TEXT
    fill(255, 255, 255);
    textSize(20);
    text("Gravitational force",47,39); //text
    text("is the force that",51,67); //text
    text("attracts you to the Earth",27,95); //text

    textSize(15);
    text("Center of the planet(Earth)",218,395); //text
    
    //Space decoration
    fill(255, 236, 92,200);
    quad(g.S+258,g.S+99,g.S+237,g.S+60,g.S+257,g.S+67,g.S+277,g.S+61);//star1
    fill(255, 255, 255);
    quad(g.S+257,g.S+97,g.S+251,g.S+61,g.S+257,g.S+42,g.S+263,g.S+61);//star1 up
    quad(g.S+257,g.S+68,g.S+232,g.S+60,g.S+258,g.S+58,g.S+278,g.S+61);//star1 down
    fill(255, 236, 92,200);
    quad(g.S+217,g.S+67,g.S+201,g.S+30,g.S+192,g.S+30,g.S+233,g.S+29);//star2 up
    fill(255, 255, 255);
    quad(g.S+218,g.S+64,g.S+214,g.S+28,g.S+218,g.S+13,g.S+221,g.S+29);//star2 up
    quad(g.S+220,g.S+27,g.S+192,g.S+30,g.S+217,g.S+33,g.S+238,g.S+29);//star2 down
    
    fill(247, 255, 194,200);//C.star5 starlight
    ellipse(g.Sg+282,g.Sg+22,g.Sg-88,g.Sg-88);
    ellipse(g.Sg+-78,g.Sg+47,g.Sg-85,g.Sg-85);
    ellipse(g.Sg+177,g.Sg+-47,g.Sg-85,g.Sg-85);
    ellipse(g.Sg+112,g.Sg+46,g.Sg-85,g.Sg-85);
    ellipse(g.Sg+228,g.Sg+97,g.Sg-85,g.Sg-85);
    ellipse(g.Sg+128,g.Sg+69,g.Sg-88,g.Sg-88);
    ellipse(g.Sg+-11,g.Sg+46,g.Sg-88,g.Sg-88);
    
    fill(255, 255, 255);//C.star1
    ellipse(g.S-78,g.S+46,g.S-92,g.S-92);
    ellipse(g.S+112,g.S+45,g.S-92,g.S-92);
    ellipse(g.S+228,g.S+97,g.S-92,g.S-92);
    ellipse(g.S+128,g.S+69,g.S-96,g.S-96);
    ellipse(g.S+-11,g.S+45,g.S-95,g.S-95);
    ellipse(g.S+282,g.S+22,g.S-95,g.S-95);
    ellipse(g.S+176,g.S+-46,g.S-93,g.S-93);
    ellipse(g.S+184,g.S+-27,g.S-94,g.S-94);
    ellipse(g.S+189,g.S+-58,g.S-95,g.S-95);
    ellipse(g.S+-78,g.S+152,g.S-93,g.S-93);
    ellipse(g.S+-73,g.S+177,g.S-94,g.S-94);
    ellipse(g.S-92,g.S+201,g.S-95,g.S-95);
    ellipse(g.S+-88,g.S+63,g.S-95,g.S-95);
    ellipse(g.S+-73,g.S+63,g.S-95,g.S-95);
    ellipse(g.S-92,g.S+94,g.S-95,g.S-95);
    ellipse(g.S+-78,g.S+105,g.S-93,g.S-93);
    ellipse(g.S+84,g.S+124,g.S-94,g.S-94);
    ellipse(g.S+111,g.S+96,g.S-95,g.S-95);
    ellipse(g.S+287,g.S+225,g.S-93,g.S-93);
    ellipse(g.S+294,g.S+238,g.S-95,g.S-95);
    ellipse(g.S+200,g.S+170,g.S-95,g.S-95);
    ellipse(g.S+-89,g.S+-83,g.S-94,g.S-94);
    ellipse(g.S+-94,g.S+-71,g.S-96,g.S-96);
    ellipse(g.S-86,g.S+13,g.S-95,g.S-95);
    ellipse(g.S-95,g.S+-43,g.S-95,g.S-95);
    ellipse(g.S+206,g.S+115,g.S-92,g.S-92);
    ellipse(g.S+160,g.S+26,g.S-94,g.S-94);
    ellipse(g.S+33,g.S+32,g.S-96,g.S-96);
    ellipse(g.S+72,g.S+46,g.S-94,g.S-94);
    ellipse(g.S+-26,g.S+44,g.S-96,g.S-96);
    ellipse(g.S+60,g.S+37,g.S-95,g.S-95);
    ellipse(g.S+83,g.S+81,g.S-95,g.S-95);
    ellipse(g.S+170,g.S+-89,g.S-94,g.S-94);
    ellipse(g.S+90,g.S+69,g.S-96,g.S-96);
    ellipse(g.S+190,g.S+120,g.S-95,g.S-95);
    ellipse(g.S+118,g.S+106,g.S-96,g.S-96);
    ellipse(g.S+191,g.S+69,g.S-96,g.S-96);
    ellipse(g.S+167,g.S+35,g.S-96,g.S-96);
    ellipse(g.S+216,g.S+91,g.S-96,g.S-96);
    ellipse(g.S+294,g.S+79,g.S-94,g.S-94);
    ellipse(g.S+286,g.S+69,g.S-95,g.S-95);
    ellipse(g.S+90,g.S+32,g.S-97,g.S-97);
    
    fill(255, 173, 228);//P.Star1 down ring1
    ellipse(g.S+215,g.S,g.S-70,g.S-70);
    ellipse(g.S+276,g.S-83,g.S-70,g.S-70);//P.Star1 up ring1
    fill(255, 89, 202);//P.Star1 down ring2
    ellipse(g.S+216,g.S-1,g.S-75,g.S-75);
    ellipse(g.S+275,g.S-82,g.S-75,g.S-75);//P.Star1 up ring2
    fill(255, 224, 245);//P.Star1 down ring3
    ellipse(g.S+218,g.S-3,g.S-80,g.S-80);
    ellipse(g.S+274,g.S-80,g.S-80,g.S-80);//P.Star1 up ring3
    
    fill(255, 0, 170);//P.Star1 shade
    ellipse(g.S+245,g.S-42,g.S,g.S);
    fill(255, 102, 204);//P.Star1
    ellipse(g.S+250,g.S-47,g.S-15,g.S-15);
    fill(255, 173, 230);//P.Star1 holes
    ellipse(g.S+278,g.S-58,g.S-85,g.S-85);//HOLE1
    ellipse(g.S+283,g.S-40,g.S-90,g.S-90);//HOLE2
    ellipse(g.S+285,g.S-27,g.S-95,g.S-95);//HOLE3
    
    fill(227, 117, 255);//P.star3
    ellipse(378,263,g.S+8,g.S+8);
    fill(208, 0, 255);//P.star3
    ellipse(377,258,g.S+5,g.S+5);
    fill(227, 117, 255);//P.star3
    ellipse(377,250,g.S-10,g.S-10);
    fill(208, 0, 255);//P.star3
    ellipse(380,241,g.S-30,g.S-30);
    fill(227, 117, 255);//P.star3
    ellipse(382,231,g.S-50,g.S-50);
    fill(208, 0, 255);//P.star3
    ellipse(382,224,g.S-70,g.S-70);
    
    //TREE
    fill(255, 187, 0);
    rect(319,171,20,147);
    fill(83, 166, 0);
    ellipse(298,223,50,50);
    ellipse(350,223,50,50);
    ellipse(327,223,50,50);
    ellipse(312,191,50,50);
    ellipse(334,187,50,50);
    
    //apple
    fill(237, 0, 0);//apple
    ellipse(g.F+188,g.Fy+101,20,20);
    ellipse(349,198,20,20);
    ellipse(316,184,20,20);
    ellipse(322,215,20,20);
    ellipse(352,237,20,20);
    
    fill(255, 0, 0);//apple
    ellipse(g.F+188,g.Fy+99,15,15);
    ellipse(349,196,15,15);
    ellipse(316,183,15,15);
    ellipse(323,213,15,15);
    ellipse(352,234,15,15);
    
    //arrows
    fill(0, 68, 255);
    rect(g.Ar+15,g.Ary+77,g.A+-89,g.A+-76);//left arrow
    triangle(g.A+34,g.Al1,g.A+21,g.Al2,g.A+8,g.Al3);
    rect(g.Ar+103,g.Ary+104,g.A+-89,g.A+-76);//middle arrow
    triangle(g.A+96,g.Am1,g.A+108,g.Am2,g.A+123,g.Am3);
    rect(g.Ar+151,g.Ary+58,g.A+-89,g.A+-76);//right arrow
    triangle(g.A+174,g.Ar1,g.A+157,g.Ar2,g.A+142,g.Ar3);

    //animation
    g.Fy+=1;//fruit
    if (g.Fy>200)  {g.Fy=100;}
    g.Sg+=0.05;//starlights
    if (g.Sg>101)  {g.Sg-=3;}
    g.Ary+=0.62;//A.sticks
    if (g.Ary>199)  {g.Ary=100;}
    
    g.Al1+=0.6;//L.A
    if (g.Al1>295)  {g.Al1=199;}
    g.Al2+=0.6;//L.A
    if (g.Al2>312)  {g.Al2=216;}
    g.Al3+=0.6;//L.A
    if (g.Al3>295)  {g.Al3=199;}
    
    g.Am1+=0.6;//M.A
    if (g.Am1>323)  {g.Am1=227;}
    g.Am2+=0.6;//M.A
    if (g.Am2>346)  {g.Am2=250;}
    g.Am3+=0.6;//M.A
    if (g.Am3>323)  {g.Am3=227;}
    
    g.Ar1+=0.6;//R.A
    if (g.Ar1>274)  {g.Ar1=178;}
    g.Ar2+=0.6;//R.A
    if (g.Ar2>295)  {g.Ar2=199;}
    g.Ar3+=0.6;//R.A
    if (g.Ar3>274)  {g.Ar3=178;}
};

var setup_electro = function(e) {

};

var setup_mag = function(m) {
    
};

var setup_quiz = function(q) {
    
};

var setup_electro = function(e) {
    var P=30;
    var C=100;
    var A=100;
    var Ay=100;
    var Ch=25;
    var ChX1=99;
    var ChY1=99;
    
    var ChX2=99;
    var ChY2=99;
    
    var ChX3=99;
    var ChY3=99;
    
    var Al2=199;
    var Al4=200;
    var Al6=169;
    
    var Am2=250;
    var Am4=250;
    var Am6=226;
    
    var Ar2=199;
    var Ar4=200;
    var Ar6=169;
};

var draw_electro = function (Electrostastic_force) {
    background(255, 255, 255);

    //table
    fill(140, 103, 0);//shade
    rect(0,232,400,400,2);
    fill(186, 141, 17);//table
    rect(-10,232,400,162,2);
    
    //CHARGED POWER
    fill(109, 224, 9);
    ellipse(ChX1+148,ChY1+47,Ch,Ch);//1
    ellipse(ChX1+61,ChY1+102,Ch-10,Ch-10);//2
    ellipse(ChX1+58,ChY1-12,Ch-10,Ch-10);//3
    fill(119, 255, 0);
    ellipse(ChX2+10,ChY2+69,Ch-13,Ch-13);//1
    ellipse(ChX2+112,ChY2+15,Ch-15,Ch-15);//2
    ellipse(ChX2+158,ChY2+91,Ch-12,Ch-12);//3
    fill(180, 255, 115);
    ellipse(ChX3+19,ChY3+19,Ch-5,Ch-5);//1
    ellipse(ChX3+104,ChY3+54,Ch-11,Ch-11);//2
    

    
    //comb
    fill(201, 65, 65);
    quad(C+49, C+58, C+85, C+93, C+64, C+97, C+32, C+73);//leg1
    fill(255, 112, 112);
    quad(C+241, C+-114, C+228, C+-113, C+264, C+-70, C+267, C+-89);//leg8
    quad(C+100, C+9, C+131, C+51, C+118, C+61, C+88, C+20);//leg3
    fill(255, 181, 181);
    quad(C+73, C+34, C+58, C+48, C+90, C+79, C+102, C+68);//leg2 
    quad(C+132, C+-23, C+115, C+-7, C+151, C+31, C+161, C+23);//leg4 
    quad(C+214, C+-101, C+199, C+-90, C+239, C+-51, C+248, C+-64);//leg7
    fill(255, 112, 112);
    quad(C+156, C+-48, C+147, C+-36, C+178, C+0, C+190, C+-9);//leg5
    quad(C+188, C+-75, C+170, C+-67, C+213, C+-21, C+219, C+-36);//leg6
    fill(255, 61, 61);
    quad(C+175, C-111, C+213, C-99, C+33, C+74, C+06, C+51);//comb base
    noStroke();
    
    //Pieces of paper
    fill(251, 255, 20);
    rect(P+134,P+141,P+2,P+2);//P2
    rect(P+86,P+204,P+2,P-15);//P1
    fill(227, 212, 0);
    rect(P+100,P+157,P+2,P+2);//P4
    rect(P+72,P+205,P+2,P-17);//P7
    rect(P+101,P+226,P+2,P-15);//P10
    rect(P+141,P+227,P+2,P-16);//P3
    fill(255, 215, 84);
    rect(P+168,P+130,P+2,P+2);//P6
    rect(P+138,P+172,P+2,P+2);//P9
    rect(P+147,P+211,P+2,P-15);//P11
    rect(P+112,P+237,P+2,P+-15);//P8
    rect(P+67,P+219,P+2,P+-12);//P5
    rect(P+153,P+233,P+2,P-18);//P14
    rect(P+108,P+213,P+2,P-16);//P15
    fill(251, 255, 20);
    rect(P+119,P+221,P+2,P-16);//P12
    rect(P+164,P+236,P+2,P-16);//P13
    
    //EXPLANATION BOX
    fill(255, 99, 99);//shade
    rect(48,284,340,110,20);
    fill(255, 148, 148);//inside
    rect(38,279,340,110,20);
    
    //arrows
    fill(255, 0, 225);
    triangle(109,Al2,144,Al4,124,Al6);//left
    rect(A+21,Ay+91,A-90,A-50);
    triangle(165,Am2,193,Am4,179,Am6);//Middle
    rect(A+74,Ay+138,A-90,A-61);
    triangle(214,Ar2,242,Ar4,227,Ar6);//Right
    rect(A+122,Ay+96,A-90,A-61);

    //text 
    fill(255, 255, 255);
    textSize(18);
    text("Electrostastic force is the force",71,308); //Context
    text("between two charged objects",77,330); //Context
    text("Once they are charged, they can ",75,352); //Context
    text("attract or repel other charged objects. ",49,374); //Context

    fill(255, 135, 255);
    textSize(18);
    text("Plastic comb",278,128); //comb

    fill(250, 255, 178);
    textSize(18);
    text("Pieces of paper",226,250); //Ps

    //animation
    ChX1+=0.25;
    if (ChX1>133)  {ChX1=54;}
    ChY1-=0.15;
    if (ChY1>83)  {ChY1=115;}
    
    
    ChX2+=0.2;
    if (ChX2>116)  {ChX2=50;}
    ChY2-=0.14;
    if (ChY2>83)  {ChY2=115;}
    
    ChX3+=0.13;
    if (ChX3>130)  {ChX3=80;}
    ChY3-=0.2;
    if (ChY3>93)  {ChY3=136;}
    
    Ay-=0.5;
    if (Ay<50)  {Ay=100;}
    
    Al2-=0.5;//L
    if (Al2<148)  {Al2=199;}
    Al4-=0.5;//R
    if (Al4<148)  {Al4=199;}
    Al6-=0.5;//M
    if (Al6<118)  {Al6=169;}
    
    Am2-=0.5;//L
    if (Am2<201)  {Am2=250;}
    Am4-=0.5;//R
    if (Am4<201)  {Am4=250;}
    Am6-=0.5;//M
    if (Am6<177)  {Am6=226;}
    
    Ar2-=0.5;//L
    if (Ar2<148)  {Ar2=199;}
    Ar4-=0.5;//R
    if (Ar4<148)  {Ar4=199;}
    Ar6-=0.5;//M
    if (Ar6<118)  {Ar6=169;}
};

// var draw_M = function (m) {
    var C=99;//coin (contains: face)
    var CC=102;//Coin(outside)
    var N=100;
    var K=100;
    var S=100;
    
    
    var M=100;
    var MM=93;
    var M_MX=84;
    var M_MY=196;
    var M_MW=112;
    var M_MH=140;
    var in_M_M=false;
    
    var C=99;
    var CC=102;
    var N=100;
// };

/*
  +--^--+      a1x, a1y = top-left corner
  |/   \|      aw, ah = width & height
  |-+ +-|      point = ax+aw/2, ay
  | | | |      stem_width = aw/3 
  +-+-+-+

*/
// same for all arrows
var arrow_x_spacing = 85;
var arrow_w = 60;
var arrow_h = arrow_w*2;

var arrow_y_max = 150;
var arrow_y_min = 230;
var arrow_y_speed = 0.6;

// left arrow (other two are copies)
var arrow_x = 25; 
var arrow_y = 162;

var draw_arrow = function (x,y,w,h) {
    // draw an arrow inside 
    // the bounding box: x,y,w,h
    triangle(
        x+w/2,  y,       // top point
        x,      y+h/2,   // left corner
        x+w,    y+h/2);  // right corner
    
    rect(x+w/3, y+h/2, w/3, h/2);

};

var draw_examples = function() {
    noStroke();
    background(255, 213, 145);
    
    fill(110, 108, 96);//outline
    ellipse(CC+13,CC+145,CC+15,CC+15);
    fill(191, 188, 172);//inside
    ellipse(CC+13,CC+145,CC+10,CC+10);
    fill(217, 209, 186);//hair behind
    ellipse(C+24,C+137,C-40,C-60);
    fill(240, 238, 231);//coin pattern
    ellipse(C+17,C+152,C-35,C-35);//FACE
    triangle(C+28,C+112,C+24,C+168,C+58,C+160);//nose
    triangle(C+15,C+112,C-4,C+189,C+27,C+198);//neck
    fill(217, 209, 186);
    ellipse(C+40,C+146,8,7);//eye

    ellipse(C+-1,C+146,C-46,C-58);//hair1
    ellipse(C+-5,C+159,C-60,C-60);//hair4
    ellipse(C+13,C+129,C-40,C-60);//hair3
    
    //nail
    fill(138, 133, 138);
    triangle(N+140,N+92,N+153,N+219,N+172,N+86);//END OF THE NAIL(SHADE)
    fill(219, 219, 219);
    triangle(N+137,N+96,N+151,N+219,N+168,N+86);//END OF THE NAIL(INSIDE)
    fill(138, 133, 138);
    ellipse(N+155,N+98,N-26,N-68);
    fill(219, 219, 219);
    ellipse(N+154,N+96,N-30,N-72);
    
    //knife
    fill(222, 222, 222);
    triangle(K+-54,K+-54,K+58,K+-8,K+58,K+-55);//inside
    fill(201, 201, 201);
    triangle(K+-22,K+-54,K+56,K+-29,K+58,K+-55);//shade
    fill(232, 170, 0);
    rect(K+57,K-55,K-49,K-80);
    fill(135, 97, 3);
    rect(K+57,K-55,K-70,K-83);
    
    //Spoon
    fill(217, 217, 217);
    ellipse(283,66,54,38);//circle
    ellipse(317,70,119,16);//leg
    fill(207, 203, 207);
    ellipse(282,66,37,28);//circle
    
    fill(255, 255, 255);
    textSize(18);
    text("Cobalt coin",71,331); //materials: coin
    text("Nail",272,331); //materials: coin
    text("Knife",119,36); //materials: knife
    text("Spoon",326,47); //materials: spoon
    
    //Explanation box
    fill(176, 255, 177);
    rect(70,95,250,78,-17);
    
    //text
    fill(255, 255, 255);
    textSize(25);
    text("Examples of",127,123); //Title
    text("Magnetic Materials",87,160); //Title

};

var draw_mag = function (m) {
    background(255, 255, 255);
    fill(255, 221, 140);
    rect(-1,200,403,199);
    noStroke();
    
    //Magnets- Outside:)
    fill(217, 0, 0);//N
    rect(M+53, MM+-89, M-51, M+96,5);
    fill(41, 0, 207);//S
    rect(M+53, MM+-94, M-51, M+5,6);
    
    //Magnets Inside
    fill(255, 0, 0);//N
    rect(M+52, MM+-88, M-60, M+93,3);
    fill(47, 0, 255);//S
    rect(M+52, MM+-89, M-60, M+0,3);
    
    //gray magnet 1.
    fill(120, 115, 115);
    rect(M_MX,M_MY,M_MW, M_MH,8);
    fill(196, 192, 192);
    rect(M+-11, MM+106, M+4, M+32,8);
    
    //2.
    fill(120, 115, 115);
    rect(M+-16, MM+242, M+12, M+40,8);
    fill(196, 192, 192);
    rect(M+-16, MM+243, M+4, M+32,8);
    
    // explanation
    fill(184, 77, 0);
    rect(224,172,150,32,5);
    rect(201,197,193,32,5);
    rect(208,221,161,32,5);
    rect(197,246,207,32,5);//shade
    
    fill(222, 133, 17);
    rect(227,172,145,25,5);
    rect(204,197,188,25,5);
    rect(211,221,156,25,5);
    rect(198,246,202,25,5);
    
    //Force arrows
    fill(18, 35, 128);

    draw_arrow(
        arrow_x, 
        arrow_y, 
        arrow_w, 
        arrow_h);
    
    draw_arrow(
        arrow_x + arrow_x_spacing, 
        arrow_y, 
        arrow_w, 
        arrow_h);
    
    draw_arrow(
        arrow_x + arrow_x_spacing*2,
        arrow_y, 
        arrow_w, 
        arrow_h);
    
    //Texts
    fill(255, 255, 255);
    textSize(23);
    text("N",165,45); //N
    fill(255, 255, 255);
    textSize(23);
    text("S",166,186); //S
    textSize(20);
    text("Magnetic",99,257); //Magnetic
    text("Materials",100,283); //Materials
    
    fill(242, 255, 0);
    textSize(19);
    text("-Click me-",98,320); //Click me
    
    fill(255, 255, 255);
    textSize(19);
    text("Magnetic force ",235,190);
    text("is the force between",209,214);
    text("the magnet and",218,239); 
    text("the magnetic material.",204,264); 
     
    //ANIMATION TOOLS
    arrow_y -= arrow_y_speed;
    if (arrow_y < arrow_y_max) {
        arrow_y = arrow_y_min;
    }
};

var draw_quiz = function (q){};



// ACTUAL START OF PROGRAM!
setup_start(s);
setup_gravity(g);
setup_electro(e);
setup_mag(m);
//setup_M_examples(m2);
setup_quiz(q);

var draw = function() {
    background(255, 255, 255);
    
    if (scene === "Start") {
        draw_start(s);
    } else if (scene === "G_force") {
        draw_gravity(g);
    } else if (scene === "M_force") {
        //draw_mag(m);
    } else if (scene === "E_force") {
        draw_electro(e);
    } else if (scene === "Quiz") {
        draw_quiz(q);
    } else {
        println("Unhandled value! scene is set to: " + scene);
    }
};

var mouseClicked = function() {
    if (s.in_gbox) {
        setup_gravity(g);
        scene = 'G_force';
    } else if (s.in_mbox) {
        setup_mag(m);
        scene = 'M_force';
    } else if (s.in_ebox) {
        setup_electro(e);
        scene = 'E_force';
    } else if (s.in_qbox) {
        setup_quiz(q);
        scene = 'Quiz';
    } else {
        setup_start(s);
        scene = 'Start';
    }
    // println(scene);
    
    // reset in case we've changed scene
    s.in_gbox = false;
    s.in_ebox = false;
    s.in_mbox = false;

};
