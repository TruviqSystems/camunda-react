/*package com.truviq.camunda;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.camunda.bpm.engine.impl.pvm.delegate.ActivityBehavior;
import org.camunda.bpm.engine.impl.pvm.delegate.ActivityExecution;

public class RejectionEmailSender implements JavaDelegate,ActivityBehavior{
  public static void sendEmail(String recipient, String subject, String body) throws MessagingException {
    // Define email server properties
    Properties props = new Properties();
    
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.smtp.ssl.trust", "*");
    props.put("mail.smtp.ssl.protocols", "TLSv1.2");
   props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.port", "587");
    

    // Create a new session with an authenticator
    Session session = Session.getInstance(props, new Authenticator() {
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication("shaiksameer967633@gmail.com", "tkxykocynfrdjnoq");
      }
    });

    // Create a new message
    Message message = new MimeMessage(session);
    message.setFrom(new InternetAddress("shaiksameer967633@gmail.com"));
    message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
    message.setSubject(subject);
    message.setText(body);

    // Send the message
    Transport.send(message);
  }

@Override
public void execute(ActivityExecution execution) throws Exception {
	sendEmail("shaiksameer967633@gmail.com","Application Status","Sorry,Your application got rejected");
	
}

@Override
public void execute(DelegateExecution execution) throws Exception {
	// TODO Auto-generated method stub
	sendEmail("shaiksameer967633@gmail.com","Application Status","Sorry,Your application got rejected");
}
}*/
