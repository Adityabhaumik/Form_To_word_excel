
console.log("json to woord is working");
function generate(data) {
    const doc = new docx.Document();
    
    // doc.addSection({
    //     properties: {},
    //     children: [
    //         new docx.Paragraph({
    //             children: [
    //                 new docx.TextRun(data.Name),
    //                 new docx.TextRun({
    //                     text: `${data.Permanent_address}`,
    //                     bold: true,
    //                 }),
    //                 new docx.TextRun({
    //                     text: `${data.Phone1}`,
    //                     bold: true,
    //                 }),
    //             ],
    //         }),
    //     ],
    // });
    doc.addSection({
        properties: {},
        children: [
            new docx.Paragraph({
                spacing: {
                    before: 200,
                },
                children: [
                    new docx.TextRun({
                        text:`CANDIDATE CATEGORY :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,

                    }),
                    new docx.TextRun({
                        text: ` ${data.Category}`,
                        size: 24,
                    }),
                ],
            }),

      
            new docx.Paragraph({
                spacing: {
                    before: 200,
                },
                children: [
                    new docx.TextRun({
                        text:`POSITION APPLIED FOR :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,

                    }),
                    
                    new docx.TextRun({
                        text: `${data.Position_applied_for.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),
             new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                text: `Emergency Contact` ,
                heading: docx.HeadingLevel.HEADING_2,
                alignment: docx.AlignmentType.CENTER,
                size:40
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Name :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Emergency_contact_Name.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Relation  :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Emergency_contact_Relation.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Phone Number  :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Emergency_contact_PhoneNumber.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),
           
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }), 
           new docx.Paragraph({
                text: `PERSONAL DETAILS` ,
                heading: docx.HeadingLevel.HEADING_2,
                alignment: docx.AlignmentType.CENTER,
                size:40
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }), 
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
            // new docx.Paragraph({
            //     children: [
            //         new docx.TextRun({
            //             text:`Personal Details   `,
            //             size: 30,
            //             bold: true,
            //             font: "Calibri",
            //             allCaps: true,
            //         }),
                                                          
            //     ],
            // }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Name :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Name.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Blood Group : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Blood_group}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Present Address:  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.present_address.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Permanent Address:  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.Permanent_address.toUpperCase()}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Date Of Birth:  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text: `${data.DateOFBirth}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Mobile Number:   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Phone1} `,
                        size: 24,
                    }),
                    
                ],
            }),

        
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Alternate Number:   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Phone2} `,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Email :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Email}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Marital Status: `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.Marital_status}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Nationality: `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.Nationality}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`PassPort Number: `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.Passport_number} `,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`PassPort  Validity:  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Passport_validity}`,
                        size: 24,
                    }),
                    
                ],
            }),
            
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`PAN Number :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.Pan_Number}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:` `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:``,
                        size:24
                    }),
                                                          
                ],
            }),

    
            
            new docx.Table({
                rows: [
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`__NAME__`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_Relation_`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_Occupation_`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                           
                                            }),                                     
                                            ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_DOB_`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    

                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Family_1_Name}`,
                                                size:28,
                                                font: "Calibri",
                                                
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_1_Relation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_1_Occoupation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_1_DOB}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Family_2_Name}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_1_Relation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_2_Occoupation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_2_DOB}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Family_3_Name}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_3_Relation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_3_Occoupation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_3_DOB}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Family_4_Name}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_4_Relation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_4_Occoupation}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Family_4_DOB}`,
                                                size:28,
                                                bold: true,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before:300,
                },
                
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }), new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }), new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
       







       
        ],
    });

    doc.addSection({
        children: [
            new docx.Paragraph({
                text: `EDUCATION` ,
                heading: docx.HeadingLevel.HEADING_2,
                alignment: docx.AlignmentType.CENTER,
                size:40
            }), new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`X std Qualification Awarded : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.X_Qualification_Award}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`X std From - To  (Years mm/yy) :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.X_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`X std School Name :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.X_SchoolName}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`X std Sub or Specialization : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.X_Subject_Specialization}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`X std CGPA of % :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.X_Grade}  `,
                        size:24,
                        
                    }),
                                                          
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`XII Qualification Awarded :  ${data.XII_Qualification_Award}`,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.XII_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`XII std From - To (Years mm/yy) :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.XII_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`XII std School Name : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:` ${data.XII_SchoolName}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`XII std Sub or Specialization :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.XII_Subject_Specialization}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`XII std CGPA of % :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.XII_CGPA_Marks}  `,
                        size:24,
                     
                    }),
                            
                                                          
                ],
            }),


            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Graduation Qualification Awarded :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Graduation_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Graduation Qualification Awarded :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Graduation_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Graduation School Name :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Graduation_SchoolName}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Graduation Sub or Specialization :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Graduation_Subject_Specialization}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Graduation std CGPA of % :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.Graduation_CGPA_Marks}  `,
                        size:24,
                       
                    }),
                                                          
                ],
            }),



            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Post Graduation Qualification Awarded :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Post_Graduation_Qualification_Award}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Post Graduation From - To (Years mm/yy) :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Post_Graduation_From_To}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Post Graduation School Name :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Post_Graduation_SchoolName}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Post Graduation Sub or Specialization : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Post_Graduation_Subject_Specialization}`,
                        size: 24,
                    }),
                    
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Post Graduation std CGPA of % :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:` ${data.Post_Graduation_CGPA_Marks}`,
                        size: 24,
                    }),
                                                          
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Significant Achievements :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.Significant_Achievements}`,
                        size: 24,
                    }),
                                                          
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Extra Curricular Activities:  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.Extra_Ciricular_Acitivities}  `,
                        size:24
                    }),
                                                          
                ],
            }),
            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Training Special Courses Attended During Professional Career:   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:`${data.Training_Special_Courses}`,
                        size:24
                    }),
                                                          
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:` `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    new docx.TextRun({
                        text:``,
                        size:24
                    }),
                                                          
                ],
            }),


                    
            new docx.Table({
                rows: [

                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`Professional Membership`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_Address_`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`Grade of Membership`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`Level Of Involvement`,
                                                size:28,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    

                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_1_Name_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_1_Addresss_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_1_Grade_membership}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_1_Level_involvement}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_2_Name_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_2_Addresss_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_2_Grade_membership}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_2_Level_involvement}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_3_Name_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_3_Addresss_insti}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_3_Grade_membership}`,
                                                size:28,
                                                font: "Calibri",
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`${data.Professional_Membership_3_Level_involvement}`,
                                                size:28,
                                                font: "Calibri",
                                              
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),


                    
          


                ],
            }),
         

        ]});
    doc.addSection({
        children: [

            
          
           new docx.Paragraph({
            text: `WORK EXPERIENCE` ,
            heading: docx.HeadingLevel.HEADING_2,
            alignment: docx.AlignmentType.CENTER,
            size:40
        }),
        
        new docx.Paragraph({
            children: [
                new docx.TextRun({
                    
                }),
                
              
                
            ],
        }), new docx.Paragraph({
            children: [
                new docx.TextRun({
                    
                }),
                
              
                
            ],
        }),
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Details Of Previous Jobs :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Work_Experience}  `,
                    size:24
                }),
                                                      
            ],
        }),
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Details Of Previous Jobs :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Why_Apply}  `,
                    size:24
                }),
                                                      
            ],
        }),
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Details Of Previous Jobs :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Significant_Contribution}  `,
                    size:24
                }),
                       
                                                      
            ],
        }),



             new docx.Paragraph({
                spacing: {
                    before: 75,
                },
            children: [
                new docx.TextRun({
                    text:`Detailed description of your current job responsibilities:   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Details_current_Job}  `,
                    size:24
                }),
                                                      
            ],
        }),
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Notice Period required to Join:   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Notice_period}  `,
                    size:24
                }),
                                                      
            ],
        }),
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Salary Expected :  `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Expected_Salary}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Details of any Director positions held in any company :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Details_Position}  `,
                    size:24
                }),
                                                      
            ],
        }),

        
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`How did you come to know of opportunities in our company :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.How_Know_Us}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Any location constraints :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Locaion_Constrains}`,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Undergone Sellection Process Previously:  ${data.Previous_apply}  `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Previous_apply}  `,
                    size:24
                }),
                                                      
            ],
        }),

        
        
        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Position Applied for Previously:   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Previous_apply_Position_year}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Were you selected for an interview?   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Previous_Selected_interview}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Were you made an offer?    `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:` ${data.Previous_Made_offer}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Were you previously employed with us?   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Previous_employee}  `,
                    size:24
                }),
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Any additional information :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Previous_additional_info}  `,
                    size:24
                }),
                                                      
            ],
        }),
        

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`References:   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Reference}  `,
                    size:24
                }),
                        
                                                      
            ],
        }),

        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Do you have any relatives in this company :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Reference_relative}  `,
                    size:24
                }),
                                                      
            ],
        }),


        new docx.Paragraph({
            spacing: {
                before: 75,
            },
            children: [
                new docx.TextRun({
                    text:`Relatives Position :   `,
                    size:24,
                    bold: true,
                    font: "Calibri",
                    allCaps: true,
                }),
                new docx.TextRun({
                    text:`${data.Reference_relative_position}  `,
                    size:24
                }),
                                                      
            ],
        }),   
        
        
        ]}),


    doc.addSection({
        children: [
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                  
                    
                ],
            }),
           new docx.Paragraph({
                text: `CURRENT COMPENSATION WORKSHEET` ,
                heading: docx.HeadingLevel.HEADING_2,
                alignment: docx.AlignmentType.CENTER,
                size:40
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        
                    }),
                    
                    new docx.TextRun({
                        
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Name:   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Current_Compensation_Name}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Current Employer : `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Current_Compensation_Employer}`,
                        size: 24,
                    }),
                    
                ],
            }),


            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Position :   `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Current_Compensation_Position} `,
                        size: 24,
                    }),
                    
                ],
            }),


            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:`Location :  `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                    new docx.TextRun({
                        text:`${data.Current_Compensation_Location}`,
                        size: 24,
                    }),
                    
                ],
            }),

            new docx.Paragraph({
                spacing: {
                    before: 75,
                },
                children: [
                    new docx.TextRun({
                        text:` `,
                        size:24,
                        bold: true,
                        font: "Calibri",
                        allCaps: true,
                    }),
                    
                   
                ],
            }),
            new docx.Table({
                rows: [
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                          
                                            new docx.TextRun({
                                                text:`__Compensation Details__`,
                                                size:28,
                                                bold: true,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                            new docx.TextRun({
                                                text:`    `,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            },
                            ),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_Amount in INR_`,
                                                size:28,
                                                bold: true,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text:`_Remarks_`,
                                                size:28,
                                                bold: true,
                                                font: "Calibri",
                                                allCaps: true,
                                            }),
                                           
                                                                                  
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),

                    new docx.TableRow({
                        children: [
                           
                            new docx.TableCell({
                                children: [    new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Monthly Payments`,
                                            size:25,
                                            bold: true,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),

                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Basic`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Basic_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Basic_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),
                    

                    
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` HRA`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_HRA_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_HRA_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                       
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Allowances`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Allowances_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Allowances_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                          
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Provident Fund`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_ProvidentFund_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_ProvidentFund_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),




                    
                          
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Any others`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_AnyOther_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_AnyOther_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),




                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`TOTAL`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Total_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Total_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           
                            new docx.TableCell({
                                children: [ 
                                    new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` TOTAL - Monthly Payments Annualized`,
                                            size:25,
                                            bold: true,
                                            font: "Calibri",
                                           
                                        }),
                                     
                                       
                                                                              
                                    ],
                                }),
                            ],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Total_Anualized_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),
                            ],
                            }),
                            
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Monthly_Total_Anualized_Amount}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),

                    new docx.TableRow({
                        children: [
                           
                            new docx.TableCell({
                                children: [    new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Annual Payments`,
                                            size:25,
                                            bold: true,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),

                    
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Bonus (realistic estimate)`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Bonus_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Bonus_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),



                     
                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`LTA`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_LTA_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_LTA_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Medical`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Medical_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Medical_remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Gratuity`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Gratuity_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Gratuity_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),





                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Super Annuation`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_SuperAnuation_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_SuperAnuation_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),




                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Any other payments/allowances`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_AnyOther_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_AnyOther_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Leave Encashment`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_LeaveEncashment_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_LeaveEncashment_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`TOTAL - Annual Payments`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Total_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Annual_Total_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           
                            new docx.TableCell({
                                children: [    new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:` Car Benefits`,
                                            size:25,
                                            bold: true,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),



                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Vehicle Repair/Maintenance`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Maintainence_Ammount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Maintainence_Remark}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),



                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Petrol`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Petrol_Ammount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Petrol_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),



                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Driver Wages`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Driver_Ammount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Driver_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`Car TOTAL`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Total_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_Car_Total_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                    new docx.TableRow({
                        children: [
                           new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`GRAND TOTAL - Annual (I + II + III)`,
                                            size:25,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_GrandTotal_Amount} `,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),

                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text:`${data.Current_Compensation_GrandTotal_Remarks}`,
                                            size:21,
                                            font: "Calibri",
                                           
                                        }),
                                       
                                                                              
                                    ],
                                }),],
                            }),
                        ],
                    }),


                ],
            }),

















            

            
        ],
    });

    docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
        saveAs(blob, `${data.Name}.docx`);
        console.log("Document created successfully");
    });
}