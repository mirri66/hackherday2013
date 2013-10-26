package com.inQuest.beans;
import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Antara
 */

public class publicProfiles implements Serializable{
     
    private String firstName;
    private String lastName;
    private int id;
    
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
        System.out.println("firstname: "+firstName);
        try {
            hello();
        } catch (IOException ex) {
            Logger.getLogger(publicProfiles.class.getName()).log(Level.SEVERE, ex.getMessage(), ex);
        }
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public void hello() throws IOException{
        Process process=Runtime.getRuntime().exec("python test.py");
        BufferedReader br=new BufferedReader(new InputStreamReader(process.getInputStream()));
        while(br.ready()){
            System.out.println(br.readLine());
        }
    }
}