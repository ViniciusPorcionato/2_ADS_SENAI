package com.mycompany.calculadorarevisao;

public class CalculadoraRevisao extends javax.swing.JFrame {

    double num1, num2, resultado;
    String operacao;

    public CalculadoraRevisao() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        botao7 = new javax.swing.JButton();
        botaoSoma = new javax.swing.JButton();
        botaoSubtracao = new javax.swing.JButton();
        botaoMultiplicacao = new javax.swing.JButton();
        botaoDivisao = new javax.swing.JButton();
        campoNumerico = new javax.swing.JTextField();
        botao8 = new javax.swing.JButton();
        botao9 = new javax.swing.JButton();
        botao4 = new javax.swing.JButton();
        botao5 = new javax.swing.JButton();
        botao6 = new javax.swing.JButton();
        botao1 = new javax.swing.JButton();
        botao2 = new javax.swing.JButton();
        botao3 = new javax.swing.JButton();
        virgula = new javax.swing.JButton();
        botao0 = new javax.swing.JButton();
        botaoIgual = new javax.swing.JButton();
        botaoClear = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(0, 0, 0));
        jPanel1.setForeground(new java.awt.Color(102, 255, 255));

        botao7.setBackground(new java.awt.Color(51, 51, 51));
        botao7.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao7.setForeground(new java.awt.Color(255, 255, 255));
        botao7.setText("7");
        botao7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao7ActionPerformed(evt);
            }
        });

        botaoSoma.setBackground(new java.awt.Color(51, 51, 51));
        botaoSoma.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoSoma.setForeground(new java.awt.Color(255, 255, 255));
        botaoSoma.setText("+");
        botaoSoma.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoSomaActionPerformed(evt);
            }
        });

        botaoSubtracao.setBackground(new java.awt.Color(51, 51, 51));
        botaoSubtracao.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoSubtracao.setForeground(new java.awt.Color(255, 255, 255));
        botaoSubtracao.setText("-");
        botaoSubtracao.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoSubtracaoActionPerformed(evt);
            }
        });

        botaoMultiplicacao.setBackground(new java.awt.Color(51, 51, 51));
        botaoMultiplicacao.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoMultiplicacao.setForeground(new java.awt.Color(255, 255, 255));
        botaoMultiplicacao.setText("x");
        botaoMultiplicacao.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoMultiplicacaoActionPerformed(evt);
            }
        });

        botaoDivisao.setBackground(new java.awt.Color(51, 51, 51));
        botaoDivisao.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoDivisao.setForeground(new java.awt.Color(255, 255, 255));
        botaoDivisao.setText("/");
        botaoDivisao.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoDivisaoActionPerformed(evt);
            }
        });

        campoNumerico.setFont(new java.awt.Font("Yu Gothic UI Semibold", 0, 36)); // NOI18N
        campoNumerico.setHorizontalAlignment(javax.swing.JTextField.RIGHT);
        campoNumerico.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(255, 255, 255)));
        campoNumerico.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                campoNumericoActionPerformed(evt);
            }
        });

        botao8.setBackground(new java.awt.Color(51, 51, 51));
        botao8.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao8.setForeground(new java.awt.Color(255, 255, 255));
        botao8.setText("8");
        botao8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao8ActionPerformed(evt);
            }
        });

        botao9.setBackground(new java.awt.Color(51, 51, 51));
        botao9.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao9.setForeground(new java.awt.Color(255, 255, 255));
        botao9.setText("9");
        botao9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao9ActionPerformed(evt);
            }
        });

        botao4.setBackground(new java.awt.Color(51, 51, 51));
        botao4.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao4.setForeground(new java.awt.Color(255, 255, 255));
        botao4.setText("4");
        botao4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao4ActionPerformed(evt);
            }
        });

        botao5.setBackground(new java.awt.Color(51, 51, 51));
        botao5.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao5.setForeground(new java.awt.Color(255, 255, 255));
        botao5.setText("5");
        botao5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao5ActionPerformed(evt);
            }
        });

        botao6.setBackground(new java.awt.Color(51, 51, 51));
        botao6.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao6.setForeground(new java.awt.Color(255, 255, 255));
        botao6.setText("6");
        botao6.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao6ActionPerformed(evt);
            }
        });

        botao1.setBackground(new java.awt.Color(51, 51, 51));
        botao1.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao1.setForeground(new java.awt.Color(255, 255, 255));
        botao1.setText("1");
        botao1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao1ActionPerformed(evt);
            }
        });

        botao2.setBackground(new java.awt.Color(51, 51, 51));
        botao2.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao2.setForeground(new java.awt.Color(255, 255, 255));
        botao2.setText("2");
        botao2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao2ActionPerformed(evt);
            }
        });

        botao3.setBackground(new java.awt.Color(51, 51, 51));
        botao3.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao3.setForeground(new java.awt.Color(255, 255, 255));
        botao3.setText("3");
        botao3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao3ActionPerformed(evt);
            }
        });

        virgula.setBackground(new java.awt.Color(51, 51, 51));
        virgula.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        virgula.setForeground(new java.awt.Color(255, 255, 255));
        virgula.setText(",");
        virgula.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                virgulaActionPerformed(evt);
            }
        });

        botao0.setBackground(new java.awt.Color(51, 51, 51));
        botao0.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botao0.setForeground(new java.awt.Color(255, 255, 255));
        botao0.setText("0");
        botao0.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao0ActionPerformed(evt);
            }
        });

        botaoIgual.setBackground(new java.awt.Color(0, 153, 255));
        botaoIgual.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoIgual.setForeground(new java.awt.Color(255, 255, 255));
        botaoIgual.setText("=");
        botaoIgual.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoIgualActionPerformed(evt);
            }
        });

        botaoClear.setBackground(new java.awt.Color(51, 51, 51));
        botaoClear.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        botaoClear.setForeground(new java.awt.Color(255, 255, 255));
        botaoClear.setText("C");
        botaoClear.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoClearActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(campoNumerico, javax.swing.GroupLayout.PREFERRED_SIZE, 288, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                        .addGap(32, 32, 32)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(botao7, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao8, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao9, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(botao4, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao5, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao6, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(botao1, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao2, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao3, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(virgula, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botao0, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(botaoIgual, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(botaoMultiplicacao, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botaoDivisao, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botaoSubtracao, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botaoSoma, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botaoClear, javax.swing.GroupLayout.PREFERRED_SIZE, 60, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addContainerGap(38, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(42, 42, 42)
                .addComponent(campoNumerico, javax.swing.GroupLayout.PREFERRED_SIZE, 66, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 13, Short.MAX_VALUE)
                .addComponent(botaoClear, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(botaoSoma, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(virgula, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(botao0, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(botaoIgual, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(botao7, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botaoDivisao, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao8, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao9, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(18, 18, 18)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(botaoMultiplicacao, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao4, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao5, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao6, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(18, 18, 18)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(botaoSubtracao, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao1, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao2, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(botao3, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(68, 68, 68)))
                .addGap(21, 21, 21))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void botao7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao7ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "7");
    }//GEN-LAST:event_botao7ActionPerformed

    private void botao8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao8ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "8");
    }//GEN-LAST:event_botao8ActionPerformed

    private void botao9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao9ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "9");
    }//GEN-LAST:event_botao9ActionPerformed

    private void botao4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao4ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "4");
    }//GEN-LAST:event_botao4ActionPerformed

    private void botao5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao5ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "5");
    }//GEN-LAST:event_botao5ActionPerformed

    private void botao6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao6ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "6");
    }//GEN-LAST:event_botao6ActionPerformed

    private void botao1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao1ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "1");
    }//GEN-LAST:event_botao1ActionPerformed

    private void botao2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao2ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "2");
    }//GEN-LAST:event_botao2ActionPerformed

    private void botao3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao3ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "3");
    }//GEN-LAST:event_botao3ActionPerformed

    private void virgulaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_virgulaActionPerformed
        if (!campoNumerico.getText().contains(".")) {
            campoNumerico.setText(campoNumerico.getText() + ".");
        }
    }//GEN-LAST:event_virgulaActionPerformed

    private void botao0ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botao0ActionPerformed
        campoNumerico.setText(campoNumerico.getText() + "0");
    }//GEN-LAST:event_botao0ActionPerformed

    private void botaoIgualActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoIgualActionPerformed
        num2 = Double.parseDouble(campoNumerico.getText());

        switch (operacao) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                if (num2 == 0) {
                    campoNumerico.setText("Erro");
                    return;
                }
                resultado = num1 / num2;
                break;
        }
        campoNumerico.setText(String.valueOf(resultado));
    }//GEN-LAST:event_botaoIgualActionPerformed

    private void botaoSubtracaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoSubtracaoActionPerformed
        num1 = Double.parseDouble(campoNumerico.getText());
        operacao = "-";
        campoNumerico.setText("");
    }//GEN-LAST:event_botaoSubtracaoActionPerformed

    private void botaoSomaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoSomaActionPerformed
        num1 = Double.parseDouble(campoNumerico.getText());
        operacao = "+";
        campoNumerico.setText("");
    }//GEN-LAST:event_botaoSomaActionPerformed

    private void campoNumericoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_campoNumericoActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_campoNumericoActionPerformed

    private void botaoMultiplicacaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoMultiplicacaoActionPerformed
        num1 = Double.parseDouble(campoNumerico.getText());
        operacao = "*";
        campoNumerico.setText("");
    }//GEN-LAST:event_botaoMultiplicacaoActionPerformed

    private void botaoDivisaoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoDivisaoActionPerformed
        num1 = Double.parseDouble(campoNumerico.getText());
        operacao = "/";
        campoNumerico.setText("");
    }//GEN-LAST:event_botaoDivisaoActionPerformed

    private void botaoClearActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoClearActionPerformed
        campoNumerico.setText("");
        num1 = 0;
        num2 = 0;
        resultado = 0;
        operacao = null;
    }//GEN-LAST:event_botaoClearActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(CalculadoraRevisao.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CalculadoraRevisao.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CalculadoraRevisao.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CalculadoraRevisao.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new CalculadoraRevisao().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton botao0;
    private javax.swing.JButton botao1;
    private javax.swing.JButton botao2;
    private javax.swing.JButton botao3;
    private javax.swing.JButton botao4;
    private javax.swing.JButton botao5;
    private javax.swing.JButton botao6;
    private javax.swing.JButton botao7;
    private javax.swing.JButton botao8;
    private javax.swing.JButton botao9;
    private javax.swing.JButton botaoClear;
    private javax.swing.JButton botaoDivisao;
    private javax.swing.JButton botaoIgual;
    private javax.swing.JButton botaoMultiplicacao;
    private javax.swing.JButton botaoSoma;
    private javax.swing.JButton botaoSubtracao;
    private javax.swing.JTextField campoNumerico;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JButton virgula;
    // End of variables declaration//GEN-END:variables
}
