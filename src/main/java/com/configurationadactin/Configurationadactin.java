package com.configurationadactin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class Configurationadactin {
	public static Properties p;
	
	public Configurationadactin() throws FileNotFoundException {
	File f=new File("C:\\Users\\Vignesh\\eclipse-workspace\\cucumber_adactin\\src\\test\\java\\com\\testdataadactin\\Configuration.properties");
	FileInputStream fis=new FileInputStream(f);
	p=new Properties();
	
	
	
	
	}

}
