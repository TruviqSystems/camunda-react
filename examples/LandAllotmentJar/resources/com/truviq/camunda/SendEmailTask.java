package com.truviq.camunda;


import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

public class SendEmailTask implements JavaDelegate {

    @Override
    public void execute(DelegateExecution execution) throws Exception {

        // Get email message from process variable
        String message = (String) execution.getVariable("ApprovalMessage");

        // Configure email sender
        JavaMailSender mailSender = new JavaMailSenderImpl();
        ((JavaMailSenderImpl) mailSender).setHost("GMAIL.COM");
        ((JavaMailSenderImpl) mailSender).setPort(25);
        ((JavaMailSenderImpl) mailSender).setUsername("shaiksameer967633@gmail.com");
        ((JavaMailSenderImpl) mailSender).setPassword("badshah@18");

        // Create email message
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("shaiksameer773006@gmail.com");
        mailMessage.setSubject("Camunda Send Task Email");
        mailMessage.setText(message);

        // Send email
        mailSender.send(mailMessage);
    }
}

