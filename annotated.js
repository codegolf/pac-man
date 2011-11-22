function(l, k)             //level object, keyCode
{
  l[l.x] = ' ';            //remove player from level
  if (l[l.x + l.d] == '#') //check if previous walking direction is possible
    l.d = 0;               //stop
  if (k > 36 && k < 41 &&  //check if a cursor key was pressed
    l[l.x + (k = k % 2     //calculate walking direction
      ? k - 38             //-1 is left, +1 is right
      : (k - 39) * l.w     //-width is up, +width is down
    )] != '#')             //check if not walking into a wall
    l.d = k;               //set new walking direction
  l.p += l[l.x += l.d      //walk
    ] == '.';              //and increase points
  l[l.x] = 'P'             //place player in level
}